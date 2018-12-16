"use strict";

const Api = require("claudia-api-builder");
const api = new Api();
const getPizzas = require("./handlers/get-pizzas");
const { getOrder, getOrders } = require("./handlers/get-orders");
const createOrder = require("./handlers/create-order");
const updateOrder = require("./handlers/update-order");
const deleteOrder = require("./handlers/delete-order");

api.get(
  "/",
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve("Welcome to pizza-api!"), 2000)
    )
);

api.get(
  "/pizzas",
  () => {
    return getPizzas();
  },
  {
    error: 404
  }
);

api.get(
  "/pizzas/{id}",
  request => {
    return getPizzas(request.pathParams.id);
  },
  {
    error: 404
  }
);

api.get(
  "/orders",
  req => {
    return getOrders();
  },
  { error: 400 }
);

api.get(
  "/orders/{id}",
  req => {
    return getOrder(req.pathParams.id);
  },
  { error: 400 }
);

api.post(
  "/orders",
  req => {
    return createOrder(req.body);
  },
  { success: 201, error: 400 }
);

api.put(
  "/orders/{id}",
  req => {
    return updateOrder({ id: req.pathParams.id, ...req.body });
  },
  { error: 400 }
);

api.delete(
  "/orders/{id}",
  req => {
    return deleteOrder(req.pathParams.id);
  },
  { error: 404 }
);

module.exports = api;
