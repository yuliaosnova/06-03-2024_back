import { Router } from "express";
import {
  getAllOrders,
  addOrder,
  getOrdersByCustomer,
} from "../controllers//orders.js";

const router = new Router();

router.get("/", getAllOrders);
router.post("/", addOrder);
router.get("/customer/:email", getOrdersByCustomer);

export default router;
