const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.index);

router.get("/blog-list", userController.get_blog_list);

router.get("/blog/:slug", userController.get_blog_detail);

module.exports = router;