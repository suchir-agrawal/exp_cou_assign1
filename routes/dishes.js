const express = require('express')
const router = express.Router()




router.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/plain');
    next();
})
.get((req,res) => {
    res.end("Will provide you detail of all the dishes")
})
.post((req,res) => {
    res.end("will add the dish: "+ req.body.name + " with description: " + req.body.description);
})
.put((req,res) => {
    res.statusCode=403;
    res.end("PUT method for dishes is not supported")
})
.delete((req,res) => {
    res.end("Will delete all dishes for you.")
})


router.route('/:dishID')
.get((req,res) => {
    res.end("Will provide you with detail of the dish with dishID: "+ req.params.dishID)
})
.post((req,res) => {
    res.statusCode=403
    res.end("POST operation for dish: "+ req.params.dishID +" is not supported");
})
.put( (req,res) => {
    res.write("Update dish: "+ req.params.dishID)
    res.end("will update the dish: "+ req.body.name + "with description" + req.body.description)
})
.delete((req,res) => {
    res.end("Will delete dish with ID: "+req.params.dishID)
})

module.exports=router