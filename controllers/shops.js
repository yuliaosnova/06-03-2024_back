import Shop from "../models/shop.js";

export const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find().sort({
      name: 1,
    });
    res.json({
      status: "success",
      code: 200,
      shops,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
