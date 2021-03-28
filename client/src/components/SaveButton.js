import {Button} from "react-bootstrap";
import api from "../utils/api";

function SaveButton({book, updateBook}) {
    const saveBook = () => {
        api.saveBook(book)
           .then(() => {

           })
           .catch((err) => {
               conseole.log(err.response.data);
           }) 
    }

    return <Button onClick={saveBook}>Save</Button>;
}

export default SaveButton;