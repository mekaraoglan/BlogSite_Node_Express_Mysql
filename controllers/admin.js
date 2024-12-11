const Blog = require("../models/blog");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.get_blog_create = async (req, res) => {
    res.render("admin/blog-create", {
        pageTitle: `Blog Create`
    });
};

exports.post_blog_create = async (req, res) => {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const description = req.body.description;
    const slug = req.body.slug;
    const image = req.file.filename;

    try {
        await Blog.create({
            title: title,
            subtitle: subtitle,
            description: description,
            slug: slug,
            image: image
        });
        res.redirect("/blog-list")
    }
    catch (err) {
        console.log(err);
    }
};

exports.get_blog_list = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.render("admin/blog-list", {
            blogs: blogs,
            pageTitle: `Blog List`
        });
    }

    catch (err) {
        console.log(err);
    }
};

exports.post_blog_delete = async (req, res) => {
    const blogid = req.params.blogid;
    try {
        const blog = await Blog.findByPk(blogid);
        if (blog) {
            await blog.destroy();
            return res.redirect("/admin/blog-list");
        }
    }
    catch (err) {
        console.log(err);
    }
};

exports.get_blog_edit = async (req, res) => {
    const blogid = req.params.blogid;
    try {
        const blog = await Blog.findByPk(blogid);
        if (blog) {
            res.render("admin/blog-edit", {
                blog: blog,
                pageTitle: `Edit ${blog.title}`
            });
        }
    }
    catch (err) {
        console.log(err);
    }
};

exports.post_blog_edit = async (req, res) => {
    const blogid = req.body.blogid;

    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const description = req.body.description;
    const slug = req.body.slug;
    const image = req.file.filename;

    try {
        const blog = await Blog.findByPk(blogid);
        
        if (blog) {
            blog.title = title;
            blog.subtitle = subtitle;
            blog.description = description;
            blog.slug = slug;
            blog.image = image;

            await blog.save();
            return res.redirect("/admin/blog-list")
        }
        res.redirect("/admin/blog-list");
    }
    catch(err){
        console.log(err);
    }
};

exports.get_create_user = async (req, res) => {
    try {
        return res.render("admin/create-user", {
            pageTitle: "Create User"
        })
    }
    catch (err) {
        console.log(err);
    }
};

exports.post_create_user = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            fullname: name,
            email: email,
            password: hashedPassword
        })
        res.redirect("/admin/user-list");
    }
    catch (err) {
        console.log(err);
    }
};

exports.get_panel = async (req, res) => {
    try {
        res.render("admin/panel",{
            pageTitle: "Admin Panel"
        });
    }
    catch(err){
        console.log(err);
    }
};

exports.get_user_list = async (req, res) =>{
    try {
        const users = await User.findAll();
        res.render("admin/user-list", {
            users: users,
            pageTitle: "User List"
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_user_edit = async (req,res) => {
    const userid = req.params.userid;
    try {
        const user = await User.findByPk(userid);
        if (user) {
            res.render("admin/user-edit", {
                user: user,
                pageTitle: `Edit ${user.fullname}`
            });
        }
    } 
    catch(err){
        console.log(err);
    }
}

exports.post_user_edit = async (req,res) => {
    const userid = req.body.userid;

    const fullname = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const user = await User.findByPk(userid);
        if(user) {
            user.fullname = fullname;
            user.email = email;
            user.password = hashedPassword;

            await user.save();
            return res.redirect("/admin/user-list");
        }
        return res.redirect("/admin/user-list");
    }
    catch(err){
        console.log(err);
    }
}

exports.post_user_delete = async (req, res) => {
    const userid = req.params.userid;
    try {
        const user = await User.findByPk(userid);
        if(user) {
            await user.destroy();
            return res.redirect("/admin/user-list");
        }
    } catch(err){
        console.log(err);   
    }
} 