const { productsList } = require('../../db_service/products/products_db')

function getProductsList(_, res){
  res.json(productsList);
}

module.exports = {
  getProductsList
};