import React from 'react';
import './App.css';
import EmployeeDirectory from './pages/EmployeeDirectory';
import Header from './components/Header';

//Renders pages with components =======
function App() {
  return (
    <div>
      <Header />
      <EmployeeDirectory />
    </div>
  )
};
export default App;
