const express = require("express");
const mongoose = require('mongoose');
const Book = require('../schemas/Book');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/bookstore').then(() => console.log('Connected to DB!'));

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Books request.");
    let books = await Book.find({}, {_id: 1, name: 1, author: 1, rating: 1});
    res.json(books);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.json({success: false, error: "Invalid ID."});
    let book = await Book.findById(id, {name: 1, author: 1, genres: 1});
    if (book === null) return res.json({success: false, error: "Book not found."});
    res.json(book);
});

router.post("/", async (req, res) => {
    const data = req.body;
    try {
        const createdBook = new Book(data);
        await createdBook.save();
        res.json({success: true, data: {id: createdBook._id}});
    } catch (error) {
        res.status(500).json({success: false});
    }
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.json({success: false, error: "Invalid ID."});
    const data = req.body;
    // Option { new: true } returns modified object instead of old one
    const book = await Book.findByIdAndUpdate(id, data, {new: true});
    if (book === null) return res.json({success: false, error: "Book not found."});
    res.json({success: true, data: book});
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.json({success: false, error: "Invalid ID."});
    const book = await Book.findByIdAndDelete(id);
    if (book === null) return res.json({success: false, error: "Book not found."});
    res.json({success: true, data: {id: id}});
});

module.exports = router;