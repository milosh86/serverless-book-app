const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  if (!orderId)
    throw new Error("To delete pizza order please provide order id...");

  return docClient.delete({
    TableName: "pizza-orders",
    Key: {
      orderId: orderId
    }
  });
}

module.exports = deleteOrder;
