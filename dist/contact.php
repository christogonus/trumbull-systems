<?php
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
$configFile = __DIR__ . '/contact-config.php';
if (!is_file($configFile)) { http_response_code(500); respond(false, 'Contact form is not configured yet.'); }
$config = require $configFile;
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); header('Allow: POST'); respond(false, 'Use the contact form to send a message.'); }

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && !in_array($origin, $config['allowed_origins'] ?? [], true)) { http_response_code(403); respond(false, 'This request origin is not allowed.'); }

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$subject = trim((string)($_POST['subject'] ?? 'General inquiry'));
$message = trim((string)($_POST['body'] ?? ''));
$captcha = trim((string)($_POST['h-captcha-response'] ?? ''));
$legal = $subject === 'Privacy or legal inquiry';
if ($name === '' || mb_strlen($name) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 3 || mb_strlen($message) > 1500 || $captcha === '') { http_response_code(422); respond(false, 'Please complete all fields and the security check.'); }

$verify = http_build_query(['secret' => $config['hcaptcha_secret'] ?? '', 'response' => $captcha, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '']);
$context = stream_context_create(['http' => ['method' => 'POST', 'header' => "Content-Type: application/x-www-form-urlencoded\r\n", 'content' => $verify, 'timeout' => 8]]);
$result = @file_get_contents('https://hcaptcha.com/siteverify', false, $context);
$decoded = is_string($result) ? json_decode($result, true) : null;
if (!is_array($decoded) || empty($decoded['success'])) { http_response_code(422); respond(false, 'The security check could not be verified. Please try again.'); }

$to = $legal ? ($config['legal_email'] ?? 'legal@trumbullsystems.com') : ($config['general_email'] ?? 'info@trumbullsystems.com');
$safeSubject = preg_replace('/[\r\n]+/', ' ', $subject) ?: 'General inquiry';
$safeName = preg_replace('/[\r\n]+/', ' ', $name) ?: 'Website visitor';
$headers = ['From: Website form <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'trumbullsystems.com') . '>', 'Reply-To: ' . $email, 'Content-Type: text/plain; charset=UTF-8'];
$body = "Name: {$safeName}\nEmail: {$email}\nSubject: {$safeSubject}\n\n{$message}";
if (!@mail($to, 'Trumbull Systems: ' . $safeSubject, $body, implode("\r\n", $headers))) { http_response_code(500); respond(false, 'The message could not be sent. Please email us directly.'); }
respond(true, 'Sent');

function respond(bool $ok, string $message): never { header('Content-Type: application/json; charset=UTF-8'); echo json_encode(['ok' => $ok, 'message' => $message]); exit; }
