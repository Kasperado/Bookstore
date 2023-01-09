import { React } from 'react'

export default function Book(props) {
    const maxRating = 10;
    return (
       <div className={`book ${props.isSelected ? "selected-border" : "default-border"}`} onClick={props.handleClick}>
            <span>{props.name}</span>
            <span className='book-data'>by {props.author}</span>
            <span className='book-data'>&#9733; {props.rating}/{maxRating}</span>
       </div>
    );
}