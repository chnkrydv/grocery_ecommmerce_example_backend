const ordersList = [
  order(0, 1, [{f1: 12}], '12July', 'active'),
];

function order(id, userId, itemsList, deliveryDate, status) {
  return { id, userId, itemsList, deliveryDate, status };
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