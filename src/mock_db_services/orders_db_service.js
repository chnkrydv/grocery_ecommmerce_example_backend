const ordersList = [
  o(0, 0, [{ productId: 'f1', requested: 12 }], '12July', 'active'),
];

function o(id, userId, itemsList, deliveryDate, status) {
  return { id, userId, itemsList, deliveryDate, status };
}

function getTotalOrdersCount() { return ordersList.length; }

function getOrders(userId) {
  return ordersList.filter(order => order.userId === userId);
}

function createNewOrder(userId, itemsList, deliveryDate) {
  const newOrderId = ordersList.length;
  const newOrder = o(newOrderId, userId, itemsList, deliveryDate, 'pending');
  ordersList.push(newOrder);
  return newOrderId;
}

module.exports = {
  getOrders,
  createNewOrder,
  getTotalOrdersCount,
};