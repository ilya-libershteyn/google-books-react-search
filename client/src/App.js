import React from "react";
import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";

function App() {
    return (
      <div>
        <GlobalNavbar/>
        <Container>
          <Header/>
        </Container>
        <div className="container">
          <div className="row">            
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
}

export default App;
