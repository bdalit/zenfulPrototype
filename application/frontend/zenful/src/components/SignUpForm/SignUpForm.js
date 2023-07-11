import React, {useState} from 'react';
import axios from "axios";
import { useNavigate} from 'react-router-dom'
import './SignUpForm.css';
import Navbar from '../Navbar/Navbar'


const SignUpForm = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([])
  
  
  const submitHandler = e => {
    e.preventDefault();
    axios.post("http://localhost:3000/signup", {
      username, email, password
    })
        .then(res => { navigate.push("/") })  // If successful, goes back to dashboard.
        .catch(err => {
            const error = err.response.data.errors;// Get the errors from err.response.data
            const errorArr = [] // Define a temp error array to push the messages in
            for (const key of Object.keys(error)) {
                errorArr.push(error[key].message) // Loop through all errors and get the messages
            }
            setErrors(errorArr)
        })
  }

  return(
    <form className="signupform" id="form" method="POST" encType="application/x-www-form-urlencoded">
    <label htmlFor="username">Username</label>
    <input 
    id="username" 
    required="" 
    type="text" 
    onChange={(e)=>setUsername(e.target.value)} 
    value={username}
    name="username" 
    />
      
    <label htmlFor="email">Email</label>
    <input 
    required="" 
    type="email" 
    name="email" 
    onChange={(e)=>setEmail(e.target.value)} 
    value={email}
    />

    <label htmlFor="password">Password</label>
      <input 
        id="password"
        required=""
        type="password"
        name="password"
        onChange={(e)=>setPassword(e.target.value)} 
        value={password}

      />
{/* 
    <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="password1"
        required=""
        type="password"
        name="confirmPassword"
      /> */}
      
    <button id="sub" type="submit" onSubmit={submitHandler}>
      Submit
    </button>
   
  </form>
  );
}

// const SignUpForm = () => {
//   return (
    // <form className="signupform" id="form" method="POST" action="/users/register" encType="application/x-www-form-urlencoded">
    //   <label htmlFor="username">Username</label>
    //   <input id="username" required="" type="text" name="username" />
        
    //   <label htmlFor="email">Email</label>
    //   <input required="" type="email" name="email" />

    //   <label htmlFor="password">Password</label>
    //     <input 
    //       id="password"
    //       required=""
    //       type="password"
    //       name="password"
    //     />

    //   <label htmlFor="confirmPassword">Confirm Password</label>
    //     <input
    //       id="password1"
    //       required=""
    //       type="password"
    //       name="confirmPassword"
    //     />
        
    //   <button id="sub" type="submit">
    //     Submit
    //   </button>
     
    // </form>
//   );
// }

export default SignUpForm;

