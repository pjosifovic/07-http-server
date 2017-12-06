'use strict';

const http = require('http');
const winston = require('winston');
const requestParser = require('./request-parser');

const winstonLevels = {error: 0, warm: 1, info: 2, verbose: 3, debug: 4};

const logger = new (winston.Logger) ({
  transports: [
    new (winston.transports.File)({
      filename: 'log.json',
      levels: winstonLevels,
    })
  ],
});

// ------------------------------------------------------------------------

const app = http.createServer((request,response) => {
  logger.log('info', 'Processing Request')
  logger.log('info', `Method: ${request.method}`);
  logger.log('info', `URL: ${request.url}`);
  logger.log('info', `HEADERS: ${JSON.stringify(request.headers)}`);

  requestParser.parse(request)
    .then(request => {
      if(request.method ==='GET' && request.url.pathname === '/'){
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(`<!DOCTYPE html>
          <html>
          <head>
          <title> cowsay </title>
          </head>
          <body>
          <header>
          <nav>
          <ul>
          <li><a href="/cowsay">cowsay</a></li>
          </ul>
          </nav>
          <header>
          <main>
          <!-- project description TO BE FILLED OUT -->
          </main>
          </body>
          </html>`);
        logger.log('info', 'Responding with a 200 status code.');
        response.end();
        return;
      }else if(request.method === 'POST' && request.url.pathname === '/echo'){
        response.writeHead(200, { 'Content-Type' : 'application/json' });
        response.write(JSON.stringify(request.body));
        response.end();
        return;
      }

      response.writeHead(400, { 'Content-Type' : 'text/plain' });
      response.write('Not Found');
      logger.log('info', 'Responding with a 404 status code');
      response.end();
      return;
    }).catch(error => {
      logger.log('info', 'Answeing with a 400 status code');
      logger.log('info', error);

      response.writeHead(400, { 'Content-Type' : 'text/plain' });
      response.write('Bad Request');
      response.end();
      return;
    });
});

// ------------------------------------------------------------------------

const server = module.exports = {};

server.start = (port, callback) => {
  logger.log('info', `Server is up on port ${port}`);
  return app.listen(port, callback);
};

server.stop = (callback) => {
  logger.log('info', 'Server stopped with no errors');
  return app.close(callback);
};
