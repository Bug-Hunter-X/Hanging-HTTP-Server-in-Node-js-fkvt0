# Hanging HTTP Server in Node.js

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` to properly close the response.  This results in hanging connections and potential performance issues.

## Bug

The `bug.js` file contains a simple HTTP server that is missing the crucial `res.end()` call in its response handler.  This omission prevents the server from properly closing the connection after sending a response, leading to client-side timeouts and server-side resource exhaustion.

## Solution

The `bugSolution.js` file provides the corrected code. The solution adds the necessary `res.end()` call.  It's good practice to always explicitly end the response to ensure efficient connection management.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Make an HTTP request to `http://localhost:3000`.  Observe the hanging connection.
5. Run `node bugSolution.js`.  The server will work correctly.