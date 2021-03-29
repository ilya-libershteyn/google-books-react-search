import {Button} from "react-bootstrap";
import api from "../utils/api";

function SaveButton({book, updateBook}) {    
    const saveBook = () => {
        if(!api.getBook(book.id)) {
            let newBook = {
                _id: book.id,
                title: book.title,
                authors: [book.authors],
                description: book.description,
                image: book.thumbnail,
                link: book.link,
            }
            api.saveBook(newBook)
            .then(() => {

            })
            .catch((err) => {
                conseole.log(err.response.data);
            })
        } 
    }

    return <Button onClick={saveBook}>Save</Button>;
}

export default SaveButton;