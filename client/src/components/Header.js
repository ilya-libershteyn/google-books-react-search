import { Jumbotron, Container } from "react-bootstrap";

function Header() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Google Book Search</h1>
                <p>
                Search and save books from Google.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Header;