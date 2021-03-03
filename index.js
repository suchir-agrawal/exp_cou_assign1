const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname +'/public'))
const dishes = require('./routes/dishes')
const promotions = require('./routes/promoRouter')
const leaders = require('./routes/leaderRouter')

app.use(bodyParser.json())
app.use('/dishes', dishes)
app.use('/promotions', promotions)
app.use('/leaders', leaders)

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/html')
    //res.write("This line is from send function");

    // res.send will produce an error if res.end is present
    //res.write will give output but after that context type will not work and we will get our whole code
    res.end(`
        <h1>Default Page</h1>
        This page will open in case of wrong URL.
    `)    
})
app.listen(3030, () => {
    console.log("Callback function call");
})


