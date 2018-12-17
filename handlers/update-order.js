const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(order) {
  if (!order || !order.id || !order.pizzaId || !order.address)
    throw new Error(
      "To update order pizza please provide order id, pizza type and address where pizza should be delivered"
    );

  return docClient
    .update({
      TableName: "pizza-orders",
      Key: { orderId: order.id },
      UpdateExpression: `SET pizza = :p, address = :a`,
      ExpressionAttributeValues: {
        ":p": order.pizzaId,
        ":a": order.address
      },
      ReturnValues: "ALL_NEW"
    })
    .promise()
    .then(res => res.Attributes);
}

module.exports = updateOrder;
