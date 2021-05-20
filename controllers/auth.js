const bcrypt = require('bcryptjs')

const User = require('../models/user')

exports.postLogin = (req, res, next) => {
    console.log("Logging in");
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    User.findOne({username: username})
    .then(user => {
        if (!user) {
            return res.json({success: false, action: "Login", message: "Invalid username or password."})
        }
        bcrypt
        .compare(password, user.password)
        .then(passwordDoesMatch => {
            if(passwordDoesMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    res.json({success:true, action:"Login"})
                  });
            }
            res.json({success: false, action: "Login",  message: "Invalid username or password."})
        })
        .catch(err => {
            console.log(`Error: Login - ${err}`)
            res.json({success: false, action: "Login",  message: "Invalid username or password."})
        })
    })
    .catch(err => {
        console.log(err)
    }) 
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
        res.json({action: "logout", success: true})
    });  
}

exports.postSignup = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.passwordConfirm;

    User.findOne({username: username})
    .then(userDoc => {
        if (userDoc) {
            return res.json({success:false, action: "signup", message: `This username is already in use [${username}].`})
        }
        return bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                username: username,
                email: email,
                password: hashedPassword
            })
            return user.save()
        })
        .then(result => {
           res.json({success: true, action: "signup"}) 
        })
    })
    
    .catch(err => {
        console.log(err)
    })

}