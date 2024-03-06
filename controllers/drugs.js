import Drug from "../models/drug.js";

export const getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find().sort("-createdAt");
    res.json({
      status: "success",
      code: 200,
      drugs,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getDrugsByIds = async (req, res) => {
  console.log(req.body);
  try {
    const ids = req.body;
    const result = await Drug.find({ _id: { $in: ids } });

    if (result.length === 0) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
