import express from "express";
import { isAuthenticated, authorizeAdmin } from "../middlewares/auth.js";
import {
  placeOrder,
  getMyOrders,
  getOrderDetails,
  getAdminOrders,
  processOrder,
  placeOrderOnline,
  paymentverification,
} from "../controllers/order.js";

const router = express.Router();

router.post("/createorder", placeOrder);
router.post("/createorderonline", placeOrderOnline);
router.post("/paymentverification", isAuthenticated, paymentverification);
router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
// admin routes

router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

export default router;
