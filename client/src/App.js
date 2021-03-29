import React from "react";
import {Container} from "react-bootstrap";
import "bootstrap/scss/bootstrap.scss";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
      <Router>
        <GlobalNavbar isloggedin={false}/>
        <Container className="py-5">
          <Header />
          <Switch>
            <Route exact path="/" component={SearchPage}/>
            <Route exact path="/saved" component={SavedPage}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </Router>
    );
}

export default App;
