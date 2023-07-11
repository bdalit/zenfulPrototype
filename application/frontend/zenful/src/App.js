import Homepage from './components/Homepage/Homepage'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import SignUpForm from './components/SignUpForm/SignUpForm';
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
       
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
