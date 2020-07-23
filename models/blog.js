const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    desc: String
})

module.exports = mongoose.model('Post', postSchema)