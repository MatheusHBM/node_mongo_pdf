const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')



const videoCardRoutes = require('./routes/videoCardRoutes')
app.use(express.json())
app.use('/',videoCardRoutes)

const DB_PORT = '27017'

mongoose.connect(`mongodb://localhost:${DB_PORT}/videoCards`)
    .then(()=>{
        console.log("Succesfully connected to MongoDB!")
        app.listen(port, () => console.log(`Server running on port ${port}!`))
    })
    .catch((err)=>console.log(err))

