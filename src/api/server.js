const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');

const handleCors = require('./middlewares/cors');
const { ifAuthenticated } = require('./middlewares/jwt');

const { login, signup, sendUserProfile, saveOrUpdateAddress } = require('./routes/users_routes');
const { sendProductsCatalog, sendCategoryItems, sendRandomlyRequestedItems } = require('./routes/products_routes');
const { sendOrdersList, createOrder } = require('./routes/orders_routes');
const { DEBUG_MODE_PORT } = require('../constants/config');

const port = process.env.PORT || DEBUG_MODE_PORT;




server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(handleCors);
server.use('/images/', express.static(path.join(__dirname, './public')));




server.get('/', (_, res) => res.send(`listening to port ${port}`));

server.get('/account/profile', ifAuthenticated, sendUserProfile);
server.post('/account/profile/address', ifAuthenticated, saveOrUpdateAddress);
server.post('/account/login', login);
server.post('/account/signup', signup);

server.get('/account/orders', ifAuthenticated, sendOrdersList);
server.post('/account/order', ifAuthenticated, createOrder);

server.get('/products/catalog', sendProductsCatalog);
server.get('/products/catalog/:category', sendCategoryItems);
server.get('/products/ids', sendRandomlyRequestedItems);




server.listen(port, () => console.log(`listening to port: ${port}`));


module.exports = server;