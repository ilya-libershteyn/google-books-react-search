import {Button} from "react-bootstrap";
import api from "../utils/api";

function DeleteButton({bookID, getBooks, ...props}) {
    const deleteBook = () => {
        api.deleteBook(bookID)
           .then(() => {
                return getBooks();
           })
           .catch((err) => {
               conseole.log(err.response.data);
           }) 
    }

    return <Button onClick={deleteBook} {...props}>Delete</Button>;
}

export default DeleteButton;