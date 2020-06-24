function p(productId, imageSource, name, brand, unit, price) {
  return {
    productId,
    imageSource,
    name,
    brand,
    unit,
    price,
  };
}

const productsCatalog = {
  dairy: {
    imageSource: '/images/dairy.jpg',
    items: [
      p('d1', '/images/d1.jpg', 'butter', 'amul', '200gm', 50),
      p('d2', '/images/d2.jpg', 'cheese', 'amul', '200gm', 79),
      p('d3', '/images/d3.jpg', 'fresh cream', 'amul', '200gm', 65),
      p('d4', '/images/d4.jpg', 'milk', 'amul', '500gm', 22),
      p('d5', '/images/d5.jpg', 'curd', 'milky mist', '500gm', 22),
      p('d6', '/images/d6.jpg', 'brown bread', 'modern', '450gm', 40),
      p('d7', '/images/d7.jpg', 'snadwich bread', 'modern', '450gm', 38),
    ],
  },
  fruits: {
    imageSource: '/images/fruits.jpg',
    items: [
      p('f1', '/images/f1.jpg', 'apple', 'generic', '500gm', 45),
      p('f2', '/images/f2.jpg', 'grapes', 'generic', '500gm', 40),
      p('f3', '/images/f3.jpg', 'guava', 'generic', '500gm', 35),
      p('f4', '/images/f4.jpg', 'mango', 'generic', '500gm', 89),
      p('f5', '/images/f5.jpg', 'orange', 'generic', '500gm', 25),
      p('f6', '/images/f6.jpg', 'papaya', 'generic', '1 each', 30),
      p('f7', '/images/f7.jpg', 'watermelon', 'generic', '1 each', 30),
    ],
  },
  vegetables: {
    imageSource: '/images/vegetables.jpg',
    items: [
      p('v1', '/images/v1.jpg', 'brinjal', 'generic', '500gm', 45),
      p('v2', '/images/v2.jpg', 'cabbage', 'generic', '1 each', 25),
      p('v3', '/images/v3.jpg', 'capsicum', 'generic', '500gm', 20),
      p('v4', '/images/v4.jpg', 'carrot', 'generic', '500gm', 26),
      p('v5', '/images/v5.jpg', 'cauliflower', 'generic', '1 each', 35),
      p('v6', '/images/v6.jpg', 'coriander', 'generic', '1 bunch', 10),
      p('v7', '/images/v7.jpg', 'garlic', 'generic', '250gm', 42),
      p('v8', '/images/v8.jpg', 'ginger', 'generic', '250gm', 23),
      p('v9', '/images/v9.jpg', 'green chilli', 'generic', '100gm', 15),
      p('v10', '/images/v10.jpg', 'okra', 'generic', '500gm', 20),
      p('v11', '/images/v11.jpg', 'onion', 'generic', '1kg', 20),
      p('v12', '/images/v12.jpg', 'potato', 'generic', '1kg', 38),
      p('v13', '/images/v13.jpg', 'radish', 'generic', '500gm', 15),
      p('v14', '/images/v14.jpg', 'spinach', 'generic', '1 bunch', 12),
      p('v15', '/images/v15.jpg', 'tomato', 'generic', '1kg', 20),
    ],
  },
  staples: {
    imageSource: '/images/staples.jpg',
    items: [
      p('stp1', '/images/stp1.jpg', 'rice (boiled)', 'generic', '1kg', 38),
      p('stp2', '/images/stp2.jpg', 'rice', 'generic', '1kg', 42),
      p('stp3', '/images/stp3.jpg', 'basmati rice', 'india gate', '1kg', 90),
      p('stp4', '/images/stp4.jpg', 'sona masuri rice', 'patanjali', '10kg', 65),
      p('stp5', '/images/stp5.jpg', 'atta', 'patanjali', '5kg', 175),
      p('stp6', '/images/stp6.jpg', 'sugar', 'madhur', '1kg', 32),
      p('stp7', '/images/stp7.jpg', 'table salt', 'tata', '1kg', 18),
      p('stp8', '/images/stp8.jpg', 'rock salt', 'tata', '200gm', 35),
    ],
  },
  legumes: {
    imageSource: '/images/legumes.jpg',
    items: [
      p('l1', '/images/l1.jpg', 'chana dal', 'generic', '500gm', 30),
      p('l2', '/images/l2.jpg', 'toor dal', 'generic', '500gm', 45),
      p('l3', '/images/l3.jpg', 'moong dal (yellow)', 'generic', '500gm', 50),
      p('l4', '/images/l4.jpg', 'moong dal (split)', 'generic', '500gm', 45),
      p('l5', '/images/l5.jpg', 'masoor dal', 'generic', '500gm', 35),
      p('l6', '/images/l6.jpg', 'chick peas', 'generic', '500gm', 55),
      p('l7', '/images/l7.jpg', 'dry peas (green)', 'generic', '500gm', 85),
      p('l8', '/images/l8.jpg', 'dry peas (yellow)', 'generic', '500gm', 70),
      p('l9', '/images/l9.jpg', 'black eyed peas', 'generic', '500gm', 40),
      p('l10', '/images/l10.jpg', 'kidnery beans (red)', 'generic', '500gm', 90),
      p('l11', '/images/l11.jpg', 'kidnery beans (white)', 'generic', '500gm', 80),
    ],
  },
  spices: {
    imageSource: '/images/spices.jpg',
    items: [
      p('spc1', '/images/spc1.jpg', 'chicken masala', 'everest', '200gm', 78),
      p('spc2', '/images/spc2.jpg', 'coriander powder', 'everest', '200gm', 22),
      p('spc3', '/images/spc3.jpg', 'hing', 'everest', '50gm', 110),
      p('spc4', '/images/spc4.jpg', 'kashmiri red chilli powder', 'everest', '200gm', 40),
      p('spc5', '/images/spc5.jpg', 'kitchen king masala', 'everest', '200gm', 35),
      p('spc6', '/images/spc6.jpg', 'turmeric powder', 'everest', '200gm', 20),
      p('spc7', '/images/spc7.jpg', 'cardamom', 'vedaka', '200gm', 75),
      p('spc8', '/images/spc8.jpg', 'cinnamon (whole)', 'vedaka', '200gm', 49),
      p('spc9', '/images/spc9.jpg', 'cloves', 'vedaka', '200gm', 90),
      p('spc10', '/images/spc10.jpg', 'jeera', 'vedaka', '200gm', 60),
      p('spc11', '/images/spc11.jpg', 'mustard seeds', 'vedaka', '200gm', 55),
    ],
  },
};

module.exports = { productsCatalog };