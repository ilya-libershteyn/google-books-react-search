import React from "react";
import { Card } from "react-bootstrap"
import SaveButton from "./SaveButton";

function Results({books}) {
    console.log(books);
    return (
        <Card>
            <Card.Body>
                {books.length ? (
                <div>
                    <h2>Results</h2>
                    {books.map(book => (
                        <Card className="my-4" key={book.id}>
                            <Card.Body>
                                <SaveButton book={book}></SaveButton>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                                <h2>{book.volumeInfo.title}</h2>
                                <h3>{book.volumeInfo.authors}</h3>
                                <p>{book.volumeInfo.description}</p>
                                <p>{book.volumeInfo.link}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                ) : (
                  <div>
                    <h2>Results</h2>
                  </div>
                )}
            </Card.Body>
        </Card>
    )
}

export default Results;