import { useState } from "react";
import Search from "../components/Search"

function SearchPage() {
    const [books, setBooks] = useState([]);

    return (
        <div>
            <Search setBooks={setBooks}/>
            <Results books={}/>
        </div>
    )
}

export default SearchPage;