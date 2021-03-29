import React from "react";
import {Button} from "react-bootstrap";
import api from "../utils/api";

function SaveButton({book, updateBook}) {    
    const saveBook = () => {
        //if(!api.getBook(book.id)) {
            let newBook = {
                _id: book.id,
                title: book.volumeInfo.title,
                authors: [book.volumeInfo.authors],
                description: book.volumeInfo.description,
                image: book.volumeInfo.thumbnail,
                link: book.volumeInfo.infoLink,
            };

            //console.log(newBook);

            api.saveBook(newBook)
            .then(() => {
                console.log(newBook);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
        //} 
    }

    return <Button onClick={saveBook}>Save</Button>;
}

export default SaveButton;