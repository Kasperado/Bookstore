import { React, useEffect, useState } from 'react'
import Book from './Book'

export default function AllBooks(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5050/books")
        .then(response => response.json())
        .then((data) => {
            setBooks(data)
            console.log(data);
        });
    }, []);
    
    return (
        <div className='book-container'>{books.map((book) =>
            <Book key={book._id} {...book} />
        )}</div>
    );
}