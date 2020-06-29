const { getOrders, createNewOrder } = require('../../mock_db_services/orders_db_service');
const { checkLimitedItems, requestItemsAndUpdateInventory } = require('../../mock_db_services/inventory_db_service');

function sendOrdersList(req, res) {
  const { userId } = req.body;
  res.status(200).json(getOrders(userId));
}

function createOrder(req, res) {
  const { userId, itemsList, deliveryDate } = req.body;
  const limitedItems = checkLimitedItems(itemsList);

  if (limitedItems.length) {
    res.status(403).json({
      message: 'Some of the items are out of stock or not in requested numbers',
      limitedItems: limitedItems
    });
  } else {
    const createdOrderId = createNewOrder(userId, itemsList, deliveryDate);
    requestItemsAndUpdateInventory(itemsList);
    res.status(200).json({
      orderId: createdOrderId,
      message: 'order placed'
    });
  }
}

module.exports = {
  sendOrdersList,
  createOrder,
};