import React from 'react'

export default function CreateBook() {

  function addNewBook() {
    fetch("http://localhost:5050/book", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: "New Story",
        author: "Me",
        rating: 9,
        genres: ["Comedy"]
       })
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <button onClick={addNewBook}>Add new book</button>
  );
}