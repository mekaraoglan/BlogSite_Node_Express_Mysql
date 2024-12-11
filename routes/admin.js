const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

const isAuth = require("../middlewares/auth");
const imageUpload = require("../helpers/image-upload");


router.get("/create-user", isAuth, adminController.get_create_user);

router.post("/create-user", isAuth, adminController.post_create_user);

router.get("/blog-create", isAuth, adminController.get_blog_create);

router.post("/blog-create", imageUpload.upload.single('image'), isAuth, adminController.post_blog_create);

router.get("/blog-list", isAuth, adminController.get_blog_list);

router.post("/blog-delete/:blogid", isAuth, adminController.post_blog_delete);

router.get("/blog-edit/:blogid", isAuth, adminController.get_blog_edit);

router.post("/blog-edit/:blogid", isAuth, imageUpload.upload.single('image'), adminController.post_blog_edit);

router.get("/panel", isAuth, adminController.get_panel);

router.get("/user-list", isAuth, adminController.get_user_list);

router.get("/user-edit/:userid", isAuth, adminController.get_user_edit);

router.post("/user-edit/:userid", isAuth, adminController.post_user_edit);

router.post("/user-delete/:userid", isAuth, adminController.post_user_delete);


module.exports = router;