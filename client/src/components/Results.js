import { Card } from "react-bootstrap"

function Results({books}) {
    
    if(books.length)
    {
        return (
            <Card>
                <Card.Body>
                    <div>
                        <h2>Results</h2>
                        {books.map((book) => {
                            <Card className="my-4" key={book.id}>
                                <Card.body>
                                    <img src={book.image}/>
                                    <p>{book.title}</p>
                                    <p>{book.authors}</p>
                                    <p>{book.description}</p>
                                    <p>{book.link}</p>
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

export default Results;