const express = require('express');
const server = express();
const { DEBUG_MODE_PORT } = require('./constants/config');
const { getProductsList } = require('./api/routes/products_routes');
const port = process.env.PORT || DEBUG_MODE_PORT;
const handleCors = require('./api/middlewares/cors');

server.use(handleCors);
server.use('/images/', express.static(__dirname+'/public/'));

server.get('/', (_, res)=> res.send(`listening to port ${port}`));
server.get('/api/products', getProductsList);


server.listen(port, () => console.log(`listening to port: ${port}`));