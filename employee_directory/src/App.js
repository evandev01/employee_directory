import React, {useState, useEffect} from 'react';
import * as API from './utils/API';
import EmployeeDirectory from './pages/EmployeeDirectory';
import Header from './components/Header';
// import SearchForm from './components/SearchForm';
// import SearchResults from './components/SearchResults';

function App() {
  return(
    <div>
      <Header />
      {/* <SearchForm />
      <SearchResults /> */}
      <EmployeeDirectory />
    </div>
  )
  }
export default App;
