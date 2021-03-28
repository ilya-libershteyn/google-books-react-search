import { Button } from "bootstrap";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";

function ViewSaved({books}) {
    
    if(books.length)
    {
        return (
            <Card>
                <Card.Body>
                    <div>
                        {books.map((book) => {
                            <Card className="my-4" key={book._id}>
                                <Card.body>
                                    <Button href={book.link}>View</Button>
                                    <DeleteButton bookID={book._id} className="ml-2"/>
                                    <img src={book.image}/>
                                    <p>{book.title}</p>
                                    <p>{book.authors}</p>
                                    <p>{book.description}</p>
                                </Card.body>
                            </Card>
                        })}
                    </div>
                </Card.Body>
            </Card>
        )
    }
    else
    {
        return (
            <Card>
                <Card.Body>
                    <h2>No Results</h2>
                </Card.Body>
            </Card>
        )
    }
    
}

export default ViewSaved;