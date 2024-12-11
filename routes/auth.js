const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.get("/login", authController.get_login);
router.post("/login", authController.post_login);

router.get("/logout", authController.get_logout);

module.exports = router;