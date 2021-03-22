import React from "react";
import {Container} from "react-bootstrap";
import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
    return (
      <div>
        <GlobalNavbar/>
        <Container>
          <Header/>
          <Search/>
        </Container>
      </div>
    );
}

export default App;
