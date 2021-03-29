import React from "react";
import { Card } from "react-bootstrap"
import SaveButton from "./SaveButton";

function Results({books}) {
    console.log(books);
    return (
        <Card>
            <Card.Body>
                {books.length > 0? (
                <div>
                    <h2>Results</h2>
                    {books.map(book => (
                        <Card className="my-4" key={book.id}>
                            <Card.body>
                                <SaveButton book={book}></SaveButton>
                                <img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title}/>
                                <p>{book.volumeInfo.title}</p>
                                <p>{book.volumeInfo.authors}</p>
                                <p>{book.volumeInfo.description}</p>
                                <p>{book.volumeInfo.link}</p>
                            </Card.body>
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