const { productsCatalog } = require('../../db_service/products_db')

function getProductsList(_, res){
  res.json(productsCatalog);
}

module.exports = {
  getProductsList
};