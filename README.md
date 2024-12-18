# Reproducing float filtering issue in Perspective


## Usage


1. Start the server with `npm install && npm run start`
2. Go to `localhost:8080` in your browser.
3. Add a filter on `score > 95`.
4. Notice how the filter doesn't apply, and you get two errors in the
   console: `Error: Abort(): Invalid scalar type: 9` and `Error:
   Abort(): Invalid scalar type: 95`
5. Remove the filter and filter on `id > 1`. Notice how that works.
