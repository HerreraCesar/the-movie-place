import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <section id="login">
      <form className="card">
        <legend className="subtitle">{isSignIn ? "SING IN" : "SIGN UP"}</legend>
        <input
          className="input"
          placeholder="Email"
          type="email"
          name=""
          id=""
          required
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          required
        />
        {isSignIn ? null : (
          <input
            className="input"
            placeholder="Confirm password"
            type="password"
            required
          />
        )}
        <input
          className="button"
          type="button"
          value={isSignIn ? "Sign In" : "Sign Up"}
        />

        {isSignIn ? (
          <div className="texts">
            <span className="text" onClick={() => setIsSignIn(!isSignIn)}>
              New in TMP? Sign Up
            </span>
            <span className="text">Forget my password</span>
          </div>
        ) : (
          <span className="text" onClick={() => setIsSignIn(!isSignIn)}>
            Do you have an account? Sign In
          </span>
        )}
      </form>
      <p className="backgroundTitle">THE MOVIE PLACE</p>
    </section>
  );
};

export default Login;
