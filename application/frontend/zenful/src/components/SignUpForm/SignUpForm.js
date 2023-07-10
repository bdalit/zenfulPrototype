import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <form className="signupform" id="form" method="POST" action="application/backend/routes/users/register" encType="application/x-www-form-urlencoded">
      <label htmlFor="username">Username</label>
      <input id="username" required="" type="text" name="username" />
        
      <label htmlFor="email">Email</label>
      <input required="" type="email" name="email" />

      <label htmlFor="password">Password</label>
        <input 
          id="password"
          required=""
          type="password"
          name="password"
        />

      <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="password1"
          required=""
          type="password"
          name="confirmPassword"
        />
        
      <button id="sub" type="submit" onClick='formValidation()'>
        Submit
      </button>
     
    </form>
  );
}

export default SignUpForm;

