const express = require('express')
const router = express.Router()


router.route('/:promotionID')
.get((req,res) => {
    res.end("Will provide you with detail of the promotion with promotionID: "+ req.params.promotionID)
})
.post((req,res) => {
    res.statusCode=403
    res.end("POST operation for promotion: "+ req.params.promotionID +" is not supported");
})
.put( (req,res) => {
    res.write("Update promotion: "+ req.params.promotionID)
    res.end("will update the promotion: "+ req.body.name + "with description" + req.body.description)
})
.delete((req,res) => {
    res.end("Will delete promotion with ID: "+req.params.promotionID)
})

module.exports = router
