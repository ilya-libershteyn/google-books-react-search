import axios from "axios";
import React, {useRef, useState} from "react";
import { Button, Card, Form} from "react-bootstrap";


function Search({setBooks}) {
    
    const [KEY, setKEY] = useState(
        "AIzaSyA4Iz4wE4ndHiANpX77Rz3z51eqkKt8a54"
      );

    const bookInput = useRef({setBooks});

    const handleSubmit = event => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" 
                        + bookInput.current.value + "&key=" + KEY)
            .then(({data}) => {
                //console.log(data.items);
                setBooks(data.items);
            });
    }

    return(
        <Card>
            <Card.Body>
                <h2>Search</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBookName">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control 
                            ref={bookInput} 
                            type="text" 
                            placeholder="Enter Title" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Search;