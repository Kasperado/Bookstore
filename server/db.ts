import mongoose from 'mongoose';
import Book from './schemas/Book';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
        .then(() => console.log('Connected to DB!'))
        .catch((error: any) => console.log(error));

const isIdValid = (id: string) => mongoose.Types.ObjectId.isValid(id);

export default { Book, isIdValid }