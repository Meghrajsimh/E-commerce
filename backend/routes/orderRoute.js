const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/order/me/:id").get(isAuthenticatedUser, myOrders);
router.route("/admin/order").get(isAuthenticatedUser, getAllOrders);
router.route("/admin/order/:id").put(isAuthenticatedUser, updateOrder);
router
  .route("/admin/order/delete/:id")
  .delete(isAuthenticatedUser, deleteOrder);

module.exports = router;
