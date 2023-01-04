import { React } from 'react'

export default function Book(props) {
    const maxRating = 10;
    return (
       <div className='book'>
            <span>{props.name}</span>
            <span className='book-author'>by {props.author}</span>
            <span className='book-author'>&#9733; {props.rating}/{maxRating}</span>
       </div>
    );
}