const { getOrders, createNewOrder } = require('../../mock_db_services/orders_db_service');
const { checkLimitedItems, requestItemsAndUpdateInventory } = require('../../mock_db_services/inventory_db_service');
const { BAD_CREATE_ORDER_REQ_MESSAGE, SOME_ITEMS_LIMITED_MESSAGE, ORDER_PLACED_MESSAGE } = require('../../constants/messages');

function sendOrdersList(req, res) {
  const { userId } = req.body;
  res.status(200).json(getOrders(userId));
}

function createOrder(req, res) {
  const { userId, itemsList } = req.body;

  if (!itemsList || !Array.isArray(itemsList) || !itemsList.length) {
    res.status(400).json({ message: BAD_CREATE_ORDER_REQ_MESSAGE });
    return;
  }


  const limitedItems = checkLimitedItems(itemsList);

  if (limitedItems.length) {
    res.status(403).json({
      message: SOME_ITEMS_LIMITED_MESSAGE,
      limitedItems: limitedItems
    });
  } else {
    const createdOrderId = createNewOrder(userId, itemsList);
    requestItemsAndUpdateInventory(itemsList);
    res.status(200).json({
      orderId: createdOrderId,
      message: ORDER_PLACED_MESSAGE,
    });
  }
}

module.exports = {
  sendOrdersList,
  createOrder,
};