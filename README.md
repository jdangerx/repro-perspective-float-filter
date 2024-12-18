# Reproducing float filtering issue in Perspective

Reproducing finos/perspective#2881

## Usage


1. Start the server with `npm install && npm run start`
2. Go to `localhost:8080` in your browser.
3. Add a filter on `score > 95`.
4. The expected behavior is that the view would only show Charlie's information. However, the filter doesn't apply, and you get two errors in the console: `Error: Abort(): Invalid scalar type: 9` and `Error: Abort(): Invalid scalar type: 95`
5. Remove the `score` filter and filter on `id > 1`. You should see that the `int` filter works.



