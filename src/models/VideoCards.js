const mongoose = require ('mongoose')

const VideoCards = mongoose.model('VideoCards',{
    name: String,
    memorySize: Number,
    manufacturer: String,
    
})

module.exports = VideoCards