import Order from "../models/order.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort("-createdAt");
    res.json({
      status: "success",
      code: 200,
      orders,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const addOrder = async (req, res) => {
  try {
    const result = await Order.create({ ...req.body });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const getOrdersByCustomer = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ "customer.email": email });
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "Orders not found" });
    }
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
