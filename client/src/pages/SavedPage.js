import { useEffect, useState } from "react";
import ViewSaved from "../components/ViewSaved";
import api from "../utils/api";

function SavedPage() {
    const [books, setBooks] = useState([]);
   
    const getBooks = () => {
        return api.getBooks()
           .then((res) => {
            setBooks(res.data);
           });
    }

    useEffect(() => {
        getBooks();
    }, [setBooks]);
    
    return (
        <div>
            <h1>Saved Books</h1>
            <ViewSaved books={books} getBooks={getBooks}/>
        </div>
    )
}

export default SavedPage;