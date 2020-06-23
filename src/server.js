const express = require('express');
const server = express();
const { DEBUG_MODE_PORT } = require('./constants/config');

server.get('/', (_, res)=> {
  res.send('listening to port 9999');
});

server.get('/api/users', (req, res)=>{});

server.get('/api/orders', (req, res)=>{});

server.use('/api/products', (req, res)=>{
  res.send()
});


const port = process.env.PORT || DEBUG_MODE_PORT;
server.listen(port, () => console.log(`listening to port: ${port}`));