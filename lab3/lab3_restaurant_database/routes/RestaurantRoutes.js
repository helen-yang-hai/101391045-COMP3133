const express = require('express');
const restaurantModel = require("../models/Restaurant")
const router = express.Router();

// http://localhost:8081/restaurants
// return all restaurant details
router.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantModel.find({});
    try{
        res.status(200).send(restaurants)
    }catch(error){
        res.status(500).send(error)
    }
})


// http://localhost:8081/restaurants/cuisine/Japanese
// return all restaurant details by cuisine
router.get('/restaurants/cuisine/:cuisine', async(req, res) => {
    try{
        const restaurantsByCuisine = await restaurantModel.find({cuisine: req.params.cuisine})
        res.status(200).send(restaurantsByCuisine)
    }catch(error){
        res.status(500).send(error)
    }
})

// http://localhost:8081/restaurants?sortBy=ASC
// http://localhost:8081/restaurants?sortBy=DESC
// selected columns must include id, cuisines, name, city, resturant_id
// sorting by the restaurant_id
router.get('/restaurants', async(req, res) => {
    try{
        let query = restaurantModel.find({});

        if (req.query.sortBy == "ASC") {
            query = query.select("_id cuisine name city restaurant_id").sort({ 'restaurant_id': 1 });
        } else if (req.query.sortBy == "DESC") {
            query = query.select("_id cuisine name city restaurant_id").sort({ 'restaurant_id': -1 });
        } else {
            query = query.select("_id cuisine name city restaurant_id");
        }

        const restaurants = await query.exec();
        res.status(200).send(restaurants);
    }catch(error){
        res.status(500).send(error)
    }
})


// http://localhost:8081/restaurants/Delicatessen
// restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
// The selected columns must include cuisines, name and city, but exclude id
// The sorting order must be Ascending Order on the name
router.get('/restaurants/:cuisine', async(req, res) => {
    try{
        const restaurants = await restaurantModel.find({cuisine: req.params.cuisine, city: {$ne: 'Brooklyn'}}).select("cuisine name city").sort({'name': 1})
        res.status(200).send(restaurants)
    }catch(error){
        res.status(500).send(error)
    }
})


module.exports = router;



