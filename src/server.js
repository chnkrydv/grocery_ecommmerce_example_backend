const express = require('express');
const server = express();
const { DEBUG_MODE_PORT } = require('./constants/config');
const { getProductsList } = require('./api/routes/products_routes');
const port = process.env.PORT || DEBUG_MODE_PORT;

server.get('/', (_, res)=> {
  res.send(`listening to port ${port}`);
});

server.use('/api/products', getProductsList);


server.listen(port, () => console.log(`listening to port: ${port}`));