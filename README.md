# Reproducing float filtering issue in Perspective

Reproducing finos/perspective#2894

## Usage


0. Make sure your timezone has a negative offset from UTC.
1. Start the server with `npm install && npm run start`
2. Go to `localhost:8080` in your browser.
3. Try to filter on `date == 12/31/2024`.
4. The expected behavior is that the view would show the row with `date` == 12/31/24, but no rows appear.
5. If you filter on `date == 01/01/2025`, the expected row appears.

Since we're setting the date to 32-bit date 20089 (which corresponds to 2025-01-01), and my own TZ is UTC-5, it appears that the date *filters* are parsed as UTC and the date *values* are converted to local time.
