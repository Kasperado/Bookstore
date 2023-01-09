import { useState, React } from 'react'

export default function CreateBook() {
  const defaultFormState = {
    name: "",
    author: "",
    rating: "5",
    genres: [""]
  };
  const [formData, setFormData] = useState(defaultFormState);

  function handleInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData((data) => { return { ...data, [name]: value } });
  }

  function addNewBook(event) {
    event.preventDefault();
    fetch("http://localhost:5050/books", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: formData.name,
        author: formData.author,
        rating: parseInt(formData.rating),
        genres: formData.genres.split(",")
       })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Success");
        setFormData(defaultFormState);
      } else {
        alert("Something went wrong, try again later.")
      }
    })
  }

  return (
    <form>
      <span>Book record creation</span>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="My story"
        onChange={handleInput}
        name="name"
        value={formData.name}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        placeholder="Me"
        onChange={handleInput}
        name="author"
        value={formData.author}
      />
      <label htmlFor="rating">Rating</label>
      <div className='range-container'>
        <input
          type="range"
          id="rating"
          onChange={handleInput}
          name="rating"
          value={formData.rating}
          min="1"
          max="10"
        />
        <div>{formData.rating}</div>
      </div>
      <label htmlFor="genres">Genres</label>
      <input
        type="text"
        id="genres"
        placeholder="Comedy,Fiction,Fantasy"
        onChange={handleInput}
        name="genres"
        value={formData.genres}
      />
      <button onClick={addNewBook}>Add new book</button>
    </form>
  );
}