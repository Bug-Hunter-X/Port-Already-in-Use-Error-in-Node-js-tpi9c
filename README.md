# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js: the `EADDRINUSE` error, which occurs when attempting to start a server on a port that is already in use.

## Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If port 8080 is already in use by another application, the server will fail to start and throw an `EADDRINUSE` error.

## Solution

The `bugSolution.js` file provides a solution to this problem.  It uses a try...catch block to handle the error and gracefully exits the process if the port is in use.  Additionally, it attempts to find an available port if the initial port is taken.