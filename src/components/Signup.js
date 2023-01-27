import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name:"", email: "", password: "",cpassword:""});
  const host = "https://inotebook-backend-dhritiraj.onrender.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(credentials.password!==credentials.cpassword){
      props.showAlert("password and confirm password doesnot match","danger")
      return;
    }
   
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Save the auth token and redirect
       localStorage.setItem('token',json.authToken)
       props.showAlert("Succesfully signed up","success")
       navigate('/')
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
  
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container" style={{maxWidth:'500px'}}>
      <h1 className="mb-5">New here?</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            minLength={3}
            value={credentials.name}
            onChange={onChange}
          />
        </div>
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
            minLength={5}
            onChange={onChange}
            value={credentials.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            value={credentials.cpassword}
          />
        </div>
        {/* || (credentials.password!==credentials.cpassword) */}
        <button disabled={credentials.password.length<5 || credentials.name.length<3 } type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
      <div className="mt-4">Already have an account ?&ensp;
      <Link to="/login">
          Login
      </Link>
      </div>
      
    </div>
  );
};

export default Signup;
