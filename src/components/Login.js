import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  
  const host = "https://inotebook-backend-dhritiraj.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if(json.success){
      //Save the auth token and redirect
      // console.log("Req "+json.authToken)
       localStorage.setItem('token',json.authToken)
       props.showAlert("Logged in Successfully","success")
       navigate('/');
    }
    else{
      props.showAlert("Invalid credentials","danger")
      
    }
  
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container" style={{maxWidth:'500px'}}>
      <h1  className="mb-5">Welcome back,</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="mt-4">
        Don't have an account ?&ensp;
      <Link to="/signup">
             Sign Up
      </Link>
      </div> 
      
    </div>
  );
};

export default Login;
