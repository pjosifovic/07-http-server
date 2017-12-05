'use script';

require('dotenv').config();
const server = require('./lib/server');

server.start(process.env.PORT, () => {
  consolo.log(`Server is running on port ${process.env.PORT}`);
});
