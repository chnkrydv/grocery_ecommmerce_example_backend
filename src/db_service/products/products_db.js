function p(name, brand, unit, price) {
  return {
    name,
    brand,
    unit,
    price,
  };
}

const productsList = {
  dairy: {
    'd1': p('butter', 'amul', '200gm', 50),
    'd2': p('cheese', 'amul', '200gm', 79),
    'd3': p('fresh cream', 'amul', '200gm', 65),
    'd4': p('milk', 'amul', '500gm', 22),
    'd5': p('curd', 'milky mist', '500gm', 22),
    'd6': p('brown bread', 'modern', '450gm', 40),
    'd7': p('snadwich bread', 'modern', '450gm', 38),
  },
  fruits: {
    'f1': p('apple', 'generic', '500gm', 45),
    'f2': p('grapes', 'generic', '500gm', 40),
    'f3': p('guava', 'generic', '500gm', 35),
    'f4': p('mango', 'generic', '500gm', 89),
    'f5': p('orange', 'generic', '500gm', 25),
    'f6': p('papaya', 'generic', '1 each', 30),
    'f7': p('watermelon', 'generic', '1 each', 30),
  },
  legumes: {
    'l1': p('chana dal', 'generic', '500gm', 30),
    'l2': p('toor dal', 'generic', '500gm', 45),
    'l3': p('moong dal (yellow)', 'generic', '500gm', 50),
    'l4': p('moong dal (split)', 'generic', '500gm', 45),
    'l5': p('masoor dal', 'generic', '500gm', 35),
    'l6': p('chick peas', 'generic', '500gm', 55),
    'l7': p('dry peas (green)', 'generic', '500gm', 85),
    'l8': p('dry peas (yellow)', 'generic', '500gm', 70),
    'l9': p('black eyed peas', 'generic', '500gm', 40),
    'l10': p('kidnery beans (red)', 'generic', '500gm', 90),
    'l11': p('kidnery beans (white)', 'generic', '500gm', 80),
  },
  spices: {
    'spc1': p('chicken masala', 'everest', '200gm', 78),
    'spc2': p('coriander powder', 'everest', '200gm', 22),
    'spc3': p('hing', 'everest', '50gm', 110),
    'spc4': p('kashmiri red chilli powder', 'everest', '200gm', 40),
    'spc5': p('kitchen king masala', 'everest', '200gm', 35),
    'spc6': p('turmeric powder', 'everest', '200gm', 20),
    'spc7': p('cardamom', 'vedaka', '200gm', 75),
    'spc8': p('cinnamon (whole)', 'vedaka', '200gm', 49),
    'spc9': p('cloves', 'vedaka', '200gm', 90),
    'spc10': p('jeera', 'vedaka', '200gm', 60),
    'spc11': p('mustard seeds', 'vedaka', '200gm', 55),
  },
  staples: {
    'stp1': p('rice (boiled)', 'generic', '1kg', 38),
    'stp2': p('rice', 'generic', '1kg', 42),
    'stp3': p('basmati rice', 'india gate', '1kg', 90),
    'stp4': p('sona masuri rice', 'patanjali', '10kg', 65),
    'stp5': p('atta', 'patanjali', '5kg', 175),
    'stp6': p('sugar', 'madhur', '1kg', 32),
    'stp7': p('table salt', 'tata', '1kg', 18),
    'stp8': p('rock salt', 'tata', '200gm', 35),
  },
  vegetables: {
    'v1': p('brinjal', 'generic', '500gm', 45),
    'v2': p('cabbage', 'generic', '1 each', 25),
    'v3': p('capsicum', 'generic', '500gm', 20),
    'v4': p('carrot', 'generic', '500gm', 26),
    'v5': p('cauliflower', 'generic', '1 each', 35),
    'v6': p('coriander', 'generic', '1 bunch', 10),
    'v7': p('garlic', 'generic', '250gm', 42),
    'v8': p('ginger', 'generic', '250gm', 23),
    'v9': p('green chilli', 'generic', '100gm', 15),
    'v10': p('okra', 'generic', '500gm', 20),
    'v11': p('onion', 'generic', '1kg', 20),
    'v12': p('potato', 'generic', '1kg', 38),
    'v13': p('radish', 'generic', '500gm', 15),
    'v14': p('spinach', 'generic', '1 bunch', 12),
    'v15': p('tomato', 'generic', '1kg', 20),
  },
};

module.exports = { productsList };