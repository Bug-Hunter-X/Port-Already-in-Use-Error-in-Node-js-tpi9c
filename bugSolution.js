const http = require('http');
const { findAvailablePort } = require('find-available-port')

async function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello, World!');
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        reject(new Error(`Port ${port} is already in use`));
      } else {
        reject(err);
      }
    });

    server.on('listening', () => {
      resolve(server);
    });

    server.listen(port);
  });
}

async function main(){
  const initialPort = 8080;
  const availablePort = await findAvailablePort(initialPort);
  try {
    const server = await startServer(availablePort);
    console.log(`Server is listening on port ${availablePort}`);

    // Keep the server running
    // server.on('close', () => console.log('Server closed'));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

main();