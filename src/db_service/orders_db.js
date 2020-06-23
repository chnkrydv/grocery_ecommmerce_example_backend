const ordersList = [
];

function order(id, userId, products, deliveryDate, status) {
  return { id, userId, products, deliveryDate, status };
}

function getOrderProductMap(productId, count) {
  return { productId, count };
}

function getOrders(userId) {
  return ordersList.filter(order => order.userId === userId);
}

function createOrder(userId, productsList, deliveryDate) {
  const newOrderId = ordersList.length;
  const newOrder = order(newOrderId, userId, productsList, deliveryDate, 'pending');
  ordersList.push(newOrder);
  return newOrderId;
}

export {
  getOrders,
  getOrderProductMap,
  createOrder,
};