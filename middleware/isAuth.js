module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.json({auth:false, action: "middlewareCheck"})
    }
    next()
}