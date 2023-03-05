import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    rating: Number,
    genres: [String]
})

export default mongoose.model("Book", bookSchema);