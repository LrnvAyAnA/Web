const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Dish = require('./Dish')
const DB_URL = 'mongodb+srv://andrewrd0364:visagemain0364@cluster0.b5tzfiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(express.json())

app.post("/", async (req, res) => {
    const {name, description, picture} = req.body
    const dish = await Dish.create({name, description, picture})
    res.status(200).json('Server working')
})

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(5000, () => {console.log("Server started on port 5000")})
    } catch (e) {
        console.log(e)
    }
}
 startApp()