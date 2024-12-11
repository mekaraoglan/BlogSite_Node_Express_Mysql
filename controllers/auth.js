const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.get_login = async (req, res) => {
    try {
        return res.render("auth/login", {
            pageTitle: "Login"
        })
    }
    catch (err){
        console.log(err);
    }
};


exports.post_login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        
        if(!user){
            return res.render("auth/login", {
                pageTitle: "Login",
                message: "No account found with this email."
            });
        }
        
        const match = await bcrypt.compare(password, user.password);
        
        if (match) {
            req.session.isAuth = true;
            req.session.fullname = user.fullname;

            req.session.save(function(err) {
                if (err) {
                    console.log('Session save error:', err);
                    return res.render("auth/login", {
                        pageTitle: "Login",
                        message: "There was an issue saving the session."
                    });
                }
                return res.redirect("/"); 
            });

        } else {
            return res.render("auth/login", {
                pageTitle: "Login",
                message: "Your password is incorrect."
            });
        }
    }
    catch (err){
        console.log(err);
    }
}

// exports.get_logout = async function(req, res) {
//     try {
//         await req.session.destroy();
//         return res.redirect("/account/login");
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

exports.get_logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.log('Session destroy error:', err);
                return res.render("auth/login", {
                    pageTitle: "Login",
                    message: "There was an issue logging you out."
                });
            }
            res.redirect("/account/login"); 
        });
    } catch (err) {
        console.log(err);
        return res.render("auth/login", {
            pageTitle: "Login",
            message: "An error occurred during logout."
        });
    }
};

