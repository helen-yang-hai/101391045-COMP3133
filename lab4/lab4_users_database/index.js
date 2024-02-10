const express = require('express')
const mongoose = require('mongoose')
//const indexRoutes = require("./index");
const UserModel = require('./models/users')

const app = express()

const SERVER_PORT = 3000

const DB_CONNECTION_STRING = "mongodb+srv://rootadmin:qwer1234@cluster0.mn0pq2e.mongodb.net/comp3133_lab4?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.post('/users', async(req, res) => {
    try{
        UserModel.insertMany(req.body).then(function(){
            console.log("Data inserted")
            res.status(200).json({message: "insert successfully"})
        }).catch(function(error){
            console.log(error)
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message: error})
    }
})

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
});