const inventory = {
    'd1': {ordered: 0, stock: 22},
    'd2': {ordered: 0, stock: 37},
    'd3': {ordered: 0, stock: 11},
    'd4': {ordered: 0, stock: 64},
    'd5': {ordered: 0, stock: 79},
    'd6': {ordered: 0, stock: 33},
    'd7': {ordered: 0, stock: 41},
    'f1': {ordered: 0, stock: 32},
    'f2': {ordered: 0, stock: 31},
    'f3': {ordered: 0, stock: 09},
    'f4': {ordered: 0, stock: 11},
    'f5': {ordered: 0, stock: 86},
    'f6': {ordered: 0, stock: 49},
    'f7': {ordered: 0, stock: 24},
    'l1': {ordered: 0, stock: 41},
    'l2': {ordered: 0, stock: 98},
    'l3': {ordered: 0, stock: 5},
    'l4': {ordered: 0, stock: 36},
    'l5': {ordered: 0, stock: 15},
    'l6': {ordered: 0, stock: 26},
    'l7': {ordered: 0, stock: 18},
    'l8': {ordered: 0, stock: 9},
    'l9': {ordered: 0, stock: 2},
    'l10': {ordered: 0, stock: 33},
    'l11': {ordered: 0, stock: 34},
    'spc1': {ordered: 0, stock: 18},
    'spc2': {ordered: 0, stock: 21},
    'spc3': {ordered: 0, stock: 4},
    'spc4': {ordered: 0, stock: 37},
    'spc5': {ordered: 0, stock: 16},
    'spc6': {ordered: 0, stock: 28},
    'spc7': {ordered: 0, stock: 9},
    'spc8': {ordered: 0, stock: 3},
    'spc9': {ordered: 0, stock: 12},
    'spc10': {ordered: 0, stock: 13},
    'spc11': {ordered: 0, stock: 27},
    'stp1': {ordered: 0, stock: 124},
    'stp2': {ordered: 0, stock: 132},
    'stp3': {ordered: 0, stock: 5},
    'stp4': {ordered: 0, stock: 36},
    'stp5': {ordered: 0, stock: 74},
    'stp6': {ordered: 0, stock: 88},
    'stp7': {ordered: 0, stock: 67},
    'stp8': {ordered: 0, stock: 9},
    'v1': {ordered: 0, stock: 41},
    'v2': {ordered: 0, stock: 98},
    'v3': {ordered: 0, stock: 5},
    'v4': {ordered: 0, stock: 36},
    'v5': {ordered: 0, stock: 15},
    'v6': {ordered: 0, stock: 26},
    'v7': {ordered: 0, stock: 18},
    'v8': {ordered: 0, stock: 9},
    'v9': {ordered: 0, stock: 2},
    'v10': {ordered: 0, stock: 33},
    'v11': {ordered: 0, stock: 34},
    'v12': {ordered: 0, stock: 2},
    'v13': {ordered: 0, stock: 33},
    'v14': {ordered: 0, stock: 34},
    'v15': {ordered: 0, stock: 2},
};

function checkLimitedItems(itemsList){
  const limitedItems = itemsList.filer(item => inventory[item.productId]['stock'] < item.requested);
  const limitedItemsStock = limitedItems.map(item => ({
    productId: item.productId,
    stock: inventory[item.productId]['stock']
  }));

  return limitedItemsStock;
}

function requestItemsAndUpdateInventory(itemsList){
  itemsList.forEach(item => {
    const { ordered, stock } = inventory[item.productId];
    const updatedItemStock = {
      ordered: ordered + item.requested,
      stock: stock - item.requested,
    };

    inventory[item.productId] = updatedItemStock;
  });
}

module.exports = {
  inventory,
  checkLimitedItems,
  requestItemsAndUpdateInventory,
};