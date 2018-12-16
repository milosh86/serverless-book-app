function deleteOrder(orderId) {
    if (!orderId)
      throw new Error(
        "To delete pizza order please provide order id..."
      );
  
    return {};
  }
  
  module.exports = deleteOrder;
  