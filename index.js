const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require('./routes/product.route.js');
const app = express()
const PORT = 8080;

app.use(express.json())
//middleware
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send('<h1>hello node server</h1> ');
})

// Connect database
mongoose.connect("mongodb+srv://admin:admin@cluster0.adyjpha.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to database...')
    app.listen(PORT, () => {
        console.log(`Server is runnig on port ${PORT}`)
    });

    })
    .catch(() => {
        console.log('Connection Failed...')
    })