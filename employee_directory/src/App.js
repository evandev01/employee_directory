import React, {useState, useEffect} from 'react';
import * as API from './utils/API';
import EmployeeDirectory from './pages/EmployeeDirectory';
import Header from './components/Header';

function App() {
  return(
    <div>
      <Header />
      {/* <SearchForm /> */}
      {/* <SearchResultContainer /> */}
      <EmployeeDirectory />
    </div>
  )
  }
export default App;
