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
                password: hashedPassword,
                profilePicture: "images/profile_default.png"
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

exports.getUser = (req, res, next) => {
    User.findById(req.user._id)
    .then(user => {
        return res.json(user);
    })
    .catch(err => {
        console.log(err)
    })

}

exports.changeProfilePicture = (req, res, next) => {
    const newProfilePicture = req.file.path;

    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({success: false,
            action: "changeProfilePicture",
            message: errors.array()[0].msg,
            errors: errors.array()
        })
    }

    User.findById(req.user._id)
    .then(user => {
        user.profilePicture = newProfilePicture;
        user.save();
        return res.json({action: "ChangeProfile", success: true})
    })
    .catch(err => {
        console.log(err)
        return res.json({action: "ChangeProfile", success: false})
    })

}

exports.changeEmail = (req, res, next) => {
    const email = req.body.email

    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({success: false,
            action: "changeEmail",
            message: errors.array()[0].msg,
            errors: errors.array()
        })
    }

    User.findById(req.user._id)
    .then(user => {
        user.email = email;
        user.save();
        return res.json({action: "changeEmail", success: true})
    })
    .catch(err => {
        console.log(err)
        return res.json({action: "changeEmail", success: false})
    })

}

exports.changePassword = (req, res, next) => {
    const password = req.body.password

    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(422).json({success: false,
            action: "changePassword",
            message: errors.array()[0].msg,
            errors: errors.array()
        })
    }

    User.findById(req.user._id)
    .then(user => {
        subjectUser = user
        return bcrypt.hash(password, 12)
    })
    .then(hashedPassword => {
        subjectUser.password = hashedPassword
        return subjectUser.save()
    })
    .then(result => {
        res.json({success:true, action: "ChangePassword"})
    })
    .catch(err => {
        console.log(err)
        res.json({success:false, action: "ChangePassword"})
    });
}