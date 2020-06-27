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

function sendRandomlyRequestedItems(req, res) {
  const { productIdList } = req.body;
  const idsList = JSON.parse(productIdList);
  const categories = Object.keys(productsCatalog);
  const requestedItems = [];

  idsList.forEach(id => {
    let idNotFound = true;
    categories.every(category => {
      const items = productsCatalog[category]['items'];
      items.every(item => {
        console.log(item.productId);
  
        if (id === item.productId && idNotFound) {
          console.log('found one')
          requestedItems.push(item);
          idNotFound = false;
        }

        return idNotFound;
      });

      return idNotFound;
    });
  });

  console.log(requestedItems);
  res.status(200).json(requestedItems);
}

module.exports = {
  sendProductCategories,
  sendCategoryItems,
  sendRandomlyRequestedItems,
};