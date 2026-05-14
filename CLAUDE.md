# DB Fitness — Working Notes

## Visual verification with Playwright

Use the Playwright CLI to verify UI changes (especially mobile layout and iOS Safari behavior) instead of just guessing from CSS.

Start the dev server in the background, then screenshot:

```bash
pnpm dev > /tmp/db-dev.log 2>&1 &
# wait for "Ready" in /tmp/db-dev.log

# Mobile Chromium (general mobile layout)
npx playwright screenshot --browser=chromium --viewport-size=390,844 \
  --wait-for-timeout=2500 http://localhost:3000 /tmp/db-shots/mobile.png

# iOS Safari (webkit) — catches iOS-only bugs like safe-area-inset
npx playwright install webkit   # one-time
npx playwright screenshot --browser=webkit --device="iPhone 14" \
  --wait-for-timeout=2500 http://localhost:3000 /tmp/db-shots/ios.png
```

Read the screenshot back with the `Read` tool to inspect the rendered layout.

### Caveats
- Playwright webkit does NOT simulate the iPhone notch / Dynamic Island, so `env(safe-area-inset-*)` evaluates to `0` and real-device safe-area bugs won't appear in the screenshot. For those, reason from the CSS and verify on a real iPhone.
- `themeColor` (Safari browser-chrome color) is set via the `viewport` export in `app/layout.tsx`, not via CSS. It is not visible in Playwright screenshots either.
