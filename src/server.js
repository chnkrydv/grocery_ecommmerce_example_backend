const express = require('express');
const server = express();

const handleCors = require('./api/middlewares/cors');
const { ifAuthenticated } = require('./api/middlewares/jwt');

const { login, signup } = require('./api/routes/users_routes');
const { sendProductCategories, sendCategoryItems } = require('./api/routes/products_routes');
const { sendOrdersList, createOrder } = require('./api/routes/orders_routes');
const { DEBUG_MODE_PORT } = require('./constants/config');

const port = process.env.PORT || DEBUG_MODE_PORT;




server.use(handleCors);
server.use('/images/', express.static(__dirname + '/public/'));




server.get('/', (_, res) => res.send(`listening to port ${port}`));
server.get('/products', sendProductCategories);
server.get('/products/:category', sendCategoryItems);
server.get('/orders', ifAuthenticated, sendOrdersList);

server.post('/user/login', login);
server.post('/user/signup', signup);
server.post('/order', ifAuthenticated, createOrder);




server.listen(port, () => console.log(`listening to port: ${port}`));