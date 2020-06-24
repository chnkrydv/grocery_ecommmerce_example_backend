const { productsCatalog } = require('../../db_service/products_db')

function sendProductCategories(_, res) {
  const productCategories = Object.keys(productsCatalog).map(category => {
    return {
      name: category,
      imageSource: productsCatalog[category]['imageSource'],
      products: productsCatalog[category]['items'].length
    };
  });
  res.json(productCategories);
}

function sendCategoryItems(req, res) {
  const { category } = req.params;
  const categoryNameExists = Object.keys(productsCatalog).some(key => key === category);

  if (!categoryNameExists) {
    res.status(404).json({
      message: `Requested category: '${category}' does not exist.`
    });
  } else {
    const categoryProducts = productsCatalog[category]['items'];
    res.status(200).json(categoryProducts);
  }
}

module.exports = {
  sendProductCategories,
  sendCategoryItems,
};