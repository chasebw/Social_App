const express = require('express')
const router = express.Router()

router.post('/testBackend', (req, res, next) => {
        console.log("Made it Test Backend Route")
     
        console.log(req.body.topic)
        console.log(req.body.message)
        res.json({
                data: "Data Passed from the server to frontEnd",
                message: "A Message from the server passed to fronend"
        })
});
  
module.exports = router
    