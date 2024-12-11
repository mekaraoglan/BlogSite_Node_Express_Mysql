const Blog = require("../models/blog");

exports.index = async (req, res)=>{
    try {
        const blogs = await Blog.findAll({
            limit: 3,
            order: [['createdAt', 'DESC']]
        });
        res.render("user/index", {
            blogs: blogs,
            pageTitle: "Anasayfa"
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_blog_list = async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            order:[['createdAt' , 'DESC']]
        });
        res.render("user/blog-list",{
            blogs: blogs,
            pageTitle: "Blogs"
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_blog_detail = async (req, res) => {
    const slug = req.params.slug;
    try {
       const blog = await Blog.findOne({
        where: {
            slug: slug
        },
        raw: true
       });
       return res.render("user/blog-detail", {
        blog: blog,
        pageTitle: blog.title
       });
    }
    catch(err) {
        console.log(err);
    }
}