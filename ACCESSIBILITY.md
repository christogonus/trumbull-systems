# Accessibility verification

Reviewed October 8, 2026. Target: WCAG 2.2 Level AA. This report documents checks, not legal certification or a complete assistive-technology conformance audit.

## Completed checks

- axe-core 4.10.3: no violations across light/dark themes at 1440, 768, 390 and 320 CSS pixel viewport widths. Included WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice rules.
- Keyboard: skip link is first in Tab order and moves focus to main; menu opens, Escape closes it and returns focus; native links, buttons, select and fields remain keyboard accessible.
- Native required and email validation; explicit form labels; draft status uses a live region and never claims delivery.
- Mobile menu expanded state, partnership topic selection and theme persistence checked.
- Reflow: no horizontal page overflow at tested widths or 200% text size; card and section columns adapt to available space in rem units.
- Reduced motion uses instant scrolling. No animation or autoplay media.
- All local images load; section links resolve; no JavaScript runtime errors.
- Visual review of desktop, mobile, dark/light and enlarged text screenshots.
- No tax identifiers, residential address, signatures or source documents in the published folder.

## ANDI

ANDI 29.2.2 focusable-elements module was run on desktop and with the mobile navigation expanded. The official SSA download endpoint returned access denied, so the tool and module were loaded from the official SSAgov/ANDI source repository for testing only. ANDI is not shipped with the site.

Desktop: 29 focusable elements. Expanded mobile: 30. Both report one caution: "Focusable element is not in keyboard tab order; should it be tabbable?" The site's only negative tabindex belongs to `main#main`, intentionally programmatically focusable as the skip-link target. Enter on the skip link was verified to focus it. Main is not an interactive control and does not need an extra Tab stop. No missing-name or form-label alerts were reported by this module.

## Contrast items requiring manual calculation

axe cannot conclusively score text over a photograph or an empty textarea. The photograph caption has a 92% opaque navy background. Even over pure white (the brightest possible image pixel), its three text colors have contrast ratios of 10.71:1, 14.97:1 and 11.68:1. Textarea text/background ratios are 16.03:1 in light mode and 16.52:1 in dark mode. These exceed the normal-text AA minimum of 4.5:1.

## Further manual acceptance testing

Before claiming full conformance, perform end-to-end screen-reader review with NVDA or JAWS and VoiceOver, browser zoom at 200% and 400%, Windows forced-colors testing, and a full ANDI module review after any content changes. Automated scanning and the focused checks above do not establish compliance with every applicable legal requirement.

References: https://www.ssa.gov/accessibility/andi/help/howtouse.html , https://github.com/SSAgov/ANDI , https://www.w3.org/TR/WCAG22/ .
