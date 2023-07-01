const express = require("express");
const router = express.Router();
const {
  registerUSer,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");

router.route("/register").post(registerUSer);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logOut);

router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/admin/users").get(isAuthenticatedUser, getAllUser);
router.route("/admin/user/:id").get(isAuthenticatedUser,getSingleUser);
router.route("/admin/user/:id").put(isAuthenticatedUser,updateUserRole);
router.route("/admin/user/:id").delete(isAuthenticatedUser,deleteUser);

module.exports = router;
