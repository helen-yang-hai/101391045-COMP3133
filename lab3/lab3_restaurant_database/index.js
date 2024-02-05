const mongoose = require('mongoose')
const express = require('express')
const restaurantRouter = require("./routes/RestaurantRoutes")

const DB_URL = "mongodb+srv://rootadmin:qwer1234@cluster0.mn0pq2e.mongodb.net/Restaurants?retryWrites=true&w=majority"
const app = express();

app.use(restaurantRouter);


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});


