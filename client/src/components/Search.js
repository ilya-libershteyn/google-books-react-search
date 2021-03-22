import { Button, Card, Form} from "react-bootstrap";
import api from "../utils/api";

function Search() {
    
    const bookInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        api.getBooks(bookInput.current.value).then(({data}) => {

        });
    }

    return(
        <Card>
            <Card.Body>
                <h2>Search</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control ref={bookInput} type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Search;