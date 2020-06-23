function p(name, brand, quantity) {
  return {
    name,
    brand,
    quantity,
  };
}

function q(unit, price, stock) {
  return {
    unit,
    price,
    stock,
  }
}

const productsList = {
  dairy: {
    'd1': p('butter', 'amul', q('200gm', 50, 22)),
    'd2': p('cheese', 'amul', q('200gm', 79, 37)),
    'd3': p('fresh cream', 'amul', q('200gm', 65, 11)),
    'd4': p('milk', 'amul', q('500gm', 22, 64)),
    'd5': p('curd', 'milky mist', q('500gm', 22, 79)),
    'd6': p('brown bread', 'modern', q('450gm', 40, 33)),
    'd7': p('snadwich bread', 'modern', q('450gm', 38, 41)),
  },
  fruits: {
    'f1': p('apple', 'generic', q('500gm', 45, 32)),
    'f2': p('grapes', 'generic', q('500gm', 40, 31)),
    'f3': p('guava', 'generic', q('500gm', 35, 09)),
    'f4': p('mango', 'generic', q('500gm', 89, 11)),
    'f5': p('orange', 'generic', q('500gm', 25, 86)),
    'f6': p('papaya', 'generic', q('1 each', 30, 49)),
    'f7': p('watermelon', 'generic', q('1 each', 30, 24)),
  },
  legumes: {
    'l1': p('chana dal', 'generic', q('500gm', 30, 41)),
    'l2': p('toor dal', 'generic', q('500gm', 45, 98)),
    'l3': p('moong dal (yellow)', 'generic', q('500gm', 50, 5)),
    'l4': p('moong dal (split)', 'generic', q('500gm', 45, 36)),
    'l5': p('masoor dal', 'generic', q('500gm', 35, 15)),
    'l6': p('chick peas', 'generic', q('500gm', 55, 26)),
    'l7': p('dry peas (green)', 'generic', q('500gm', 85, 18)),
    'l8': p('dry peas (yellow)', 'generic', q('500gm', 70, 9)),
    'l9': p('black eyed peas', 'generic', q('500gm', 40, 2)),
    'l10': p('kidnery beans (red)', 'generic', q('500gm', 90, 33)),
    'l11': p('kidnery beans (white)', 'generic', q('500gm', 80, 34)),
  },
  spices: {
    'spc1': p('chicken masala', 'everest', q('200gm', 78, 18)),
    'spc2': p('coriander powder', 'everest', q('200gm', 22, 21)),
    'spc3': p('hing', 'everest', q('50gm', 110, 4)),
    'spc4': p('kashmiri red chilli powder', 'everest', q('200gm', 40, 37)),
    'spc5': p('kitchen king masala', 'everest', q('200gm', 35, 16)),
    'spc6': p('turmeric powder', 'everest', q('200gm', 20, 28)),
    'spc7': p('cardamom', 'vedaka', q('200gm', 75, 9)),
    'spc8': p('cinnamon (whole)', 'vedaka', q('200gm', 49, 3)),
    'spc9': p('cloves', 'vedaka', q('200gm', 90, 12)),
    'spc10': p('jeera', 'vedaka', q('200gm', 60, 13)),
    'spc11': p('mustard seeds', 'vedaka', q('200gm', 55, 27)),
  },
  staples: {
    'stp1': p('rice (boiled)', 'generic', q('1kg', 38, 124)),
    'stp2': p('rice', 'generic', q('1kg', 42, 132)),
    'stp3': p('basmati rice', 'india gate', q('1kg', 90, 5)),
    'stp4': p('sona masuri rice', 'patanjali', q('10kg', 65, 36)),
    'stp5': p('atta', 'patanjali', q('5kg', 175, 74)),
    'stp6': p('sugar', 'madhur', q('1kg', 32, 88)),
    'stp7': p('table salt', 'tata', q('1kg', 18, 67)),
    'stp8': p('rock salt', 'tata', q('200gm', 35, 9)),
  },
  vegetables: {
    'v1': p('brinjal', 'generic', q('500gm', 45, 41)),
    'v2': p('cabbage', 'generic', q('1 each', 25, 98)),
    'v3': p('capsicum', 'generic', q('500gm', 20, 5)),
    'v4': p('carrot', 'generic', q('500gm', 26, 36)),
    'v5': p('cauliflower', 'generic', q('1 each', 35, 15)),
    'v6': p('coriander', 'generic', q('1 bunch', 10, 26)),
    'v7': p('garlic', 'generic', q('250gm', 42, 18)),
    'v8': p('ginger', 'generic', q('250gm', 23, 9)),
    'v9': p('green chilli', 'generic', q('100gm', 15, 2)),
    'v10': p('okra', 'generic', q('500gm', 20, 33)),
    'v11': p('onion', 'generic', q('1kg', 20, 34)),
    'v12': p('potato', 'generic', q('1kg', 38, 2)),
    'v13': p('radish', 'generic', q('500gm', 15, 33)),
    'v14': p('spinach', 'generic', q('1 bunch', 12, 34)),
    'v15': p('tomato', 'generic', q('1kg', 20, 2)),
  },
};

module.exports = { productsList };