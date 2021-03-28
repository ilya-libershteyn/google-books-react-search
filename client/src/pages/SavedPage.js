import { useEffect, useState } from "react";
import ViewSaved from "../components/ViewSaved";
import api from "../utils/api";

function SavedPage() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        return api.getBooks()
           .then(({data}) => {
            setBooks.apply(data);
           });
    }, [setBooks]);
    
    return (
        <div>
            <h1>Saved Books</h1>
            <ViewSaved books={books} getBooks={getBooks}/>
        </div>
    )
}

export default SavedPage;