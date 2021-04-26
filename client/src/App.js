import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import NavBar from './components/navbar';
import SearchPage from './components/searchpage';
// import SavedPage from './components/savedpage';


function App() {
    return (
      <Router>
        {/* <NavBar/> */}
          <Route exact path= {["/", "/search", "/google_books_search"]}  component={SearchPage} />
          {/* <Route exact path= "/saved"  component={SavedPage} /> */}
      </Router>
    );
  }
  
  export default App;