const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productControllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const { authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/admin/products/new").post(createProduct);
router.route("/admin/products/update/:id").put(updateProduct);
router.route("/admin/products/delete/:id").delete(deleteProduct);
router.route("/products/find/:id").get(getSingleProduct);
router.route("/product/review").put(isAuthenticatedUser, createProductReview);
router.route("/product/reviews") .get(getProductReviews);
router.route("/product/reviews/delete") .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
