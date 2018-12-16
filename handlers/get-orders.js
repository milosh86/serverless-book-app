const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function getOrders() {
  return docClient
    .scan({
      TableName: "pizza-orders"
    })
    .promise()
    .then(res => res.Items)
    .catch(error => {
      console.log(`Oops, orders cannot be fetched:(`, error);
      throw error;
    });
}

function getOrder(orderId) {
  if (!orderId) throw new Error("getOrder: orderId is required!");

  return docClient
    .get({
      TableName: "pizza-orders",
      Key: { orderId }
    })
    .promise()
    .then(res => res.Item);
}

exports.getOrders = getOrders;
exports.getOrder = getOrder;
