import React from "react";
import { Button, Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";

function ViewSaved({books, getBooks}) {   
    books.map(book => console.log(book));
    return (
        <Card className="my-4">
            <Card.Body>
                {books.length ? (
                <div>
                    {books.map(book => (
                        <Card className="my-4" key={book._id}>
                            <Card.Body>
                                <Button href={book.link}>View</Button>
                                <DeleteButton bookID={book._id} getBooks={getBooks} className="ml-2"/>
                                <p>{book.title}</p>
                                <p>{book.authors}</p>
                                <p>{book.description}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                ) : (
                <Card>
                    <Card.Body>
                        <h2>No Results</h2>
                    </Card.Body>
                </Card>
                )}
            </Card.Body>
        </Card>
    )
}

export default ViewSaved;