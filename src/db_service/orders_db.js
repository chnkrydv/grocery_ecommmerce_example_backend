const ordersList = [
];

function order(id, userId, products, deliveryDate, status) {
  return { id, userId, products, deliveryDate, status };
}

function getOrders(userId) {
  return ordersList.filter(order => order.userId === userId);
}

function createNewOrder(userId, itemsList, deliveryDate) {
  const newOrderId = ordersList.length;
  const newOrder = order(newOrderId, userId, itemsList, deliveryDate, 'pending');
  ordersList.push(newOrder);
  return newOrderId;
}

module.exports = {
  getOrders,
  createNewOrder,
};