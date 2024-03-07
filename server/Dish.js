const mongoose = require('mongoose')

const Dish = new mongoose.Schema({
    name: {type: String, required: True},
    description: {type: String, required: True},
    picture: {type: String}
})

export default mongoose.model('Dish', Dish)