import { BookData } from "./AllBooks";

interface BookProps extends BookData {
    handleClick: () => void
}

export default function Book(props: BookProps) {
    const maxRating = 10;
    return (
       <div className={`book ${props.isSelected ? "selected-border" : "default-border"}`} onClick={props.handleClick}>
            <span>{props.name}</span>
            <span className='book-data'>by {props.author}</span>
            <span className='book-data'>&#9733; {props.rating}/{maxRating}</span>
       </div>
    );
}