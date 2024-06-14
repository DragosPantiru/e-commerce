import React from 'react';
import BookItem from './BookItem';
import "./AllBooks.scss";

function AllBooks({ books }) {
    return (
        <div className="container3">
            {books.map((book) => (
                <BookItem {...book} key={book.id} />
            ))}
        </div>
    );
}

export default AllBooks;