import React, { useState } from "react";
import Results from "../components/Results";
import Search from "../components/Search";

function SearchPage() {
    const [books, setBooks] = useState([]);

    return (
        <div>
            <Search setBooks={setBooks}/>
            <Results books={books}/>
        </div>
    )
}

export default SearchPage;