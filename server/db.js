const mongoose = require('mongoose');
const Book = require('./schemas/Book');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/bookstore').then(() => console.log('Connected to DB!'));

const isIdValid = (id) => mongoose.Types.ObjectId.isValid(id);

module.exports = { Book, isIdValid };