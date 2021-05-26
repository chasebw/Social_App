const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator/check')

const User = require('../models/user')

exports.postLogin = (req, res, next) => {
    console.log("Logging in");
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({success: false,
            action: "Login",
            message: errors.array()[0].msg,
            errors: errors.array()
        })
    }

    User.findOne({username: username})
    .then(user => {
        if (!user) {
            return res.json({success: false,
                action: "Login",
                message: "Invalid username or password.",
                errors: []
            })
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

    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({success: false,
            action: "signup",
            message: errors.array()[0].msg,
            errors: errors.array()
        })
    }

        bcrypt.hash(password, 12)
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
    .catch(err => {
        console.log(err)
    })

}