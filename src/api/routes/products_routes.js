const {
  productCategoryExists,
  getProductsCatalog,
  getProductsInACategory,
  getProductsByIdsList,
} = require('../../mock_db_services/products_db_service')

function sendProductsCatalog(_, res) {
  res.json(getProductsCatalog());
}

function sendCategoryItems(req, res) {
  const { category } = req.params;

  if (!productCategoryExists(category)) {
    res.status(404).json({ message: `Requested category: '${category}' does not exist.` });
  } else res.status(200).json(getProductsInACategory(category));
}

function sendRandomlyRequestedItems(req, res) {
  const { productIdList } = req.body;

  if (!productIdList) res.status(400).json({ message: 'request does not contains list of requested product ids' });
  else res.status(200).json(getProductsByIdsList(productIdList));
}

module.exports = {
  sendProductsCatalog,
  sendCategoryItems,
  sendRandomlyRequestedItems,
};