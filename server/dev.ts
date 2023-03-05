// All functions in this file are for development use only
import db from "./db";
import randomWords from "random-words";

async function createRandomBooks(number: number) {
    for (let i = 0; i < number; i++) {
        let randomBookData = { 
            name: randomWords(1)[0],
            author: randomWords(1)[0],
            rating: Math.ceil(Math.random() * 10),
            genres: randomWords(4)
        }
        const createdBook = new db.Book(randomBookData);
        await createdBook.save();    
        console.log(`Book No.${i + 1} created.`);
    }
}

export default { createRandomBooks }