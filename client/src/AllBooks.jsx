import { React, useEffect, useState } from 'react'
import Book from './Book'

export default function AllBooks(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            fetch("http://localhost:5050/books")
            .then(response => response.json())
            .then((data) => {
                data.map(book => book.isSelected = false)
                setBooks(data);
                console.log(data);
            });    
        }
        getBooks();
    }, []);

    function toggleSelection(id) {
        let newBooksArray = [...books];
        newBooksArray[id].isSelected = !newBooksArray[id].isSelected;
        setBooks(newBooksArray);
    }

    function deleteSelectedBooks() {
        let newBooksArray = [];
        let toDeleteIds = [];
        books.forEach(book => {
            if (book.isSelected) toDeleteIds.push(book._id);
            else newBooksArray.push(book);
        });
        toDeleteIds.forEach(id => deleteBook(id));
        setBooks(newBooksArray);
    }

    async function deleteBook(id) {
        fetch(`http://localhost:5050/books/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then((data) => console.log(data));    
    }
    
    return (
        <div className='books-viewer'>
            <div className='books-viewer-title'>All books in the database</div>
            <button className='delete-button' onClick={deleteSelectedBooks}>Delete selected</button>
            <div className='book-container'>
                {books.map((book, index) =>
                    <Book handleClick={() => toggleSelection(index)} key={book._id} {...book} />
                )}
            </div>
        </div>
    );
}