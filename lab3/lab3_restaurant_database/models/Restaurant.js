const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address: {
        building: {
          type: String
        },
        street: {
          type: String
        },
        zipcode: {
          type: String
        },
      },
      city: {
        type: String
      },
      cuisine: {
        type: String
      },
      name: {
        type: String
      },
      restaurant_id: {
        type: String
      },
})

module.exports = mongoose.model("restaurant", RestaurantSchema)