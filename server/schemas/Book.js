const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    rating: Number,
    genres: [String]
})

module.exports = mongoose.model("Book", bookSchema);