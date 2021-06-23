import { useState } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className={classes.Login}>
      <h1>Sign {login ? "In" : "Up"}</h1>
      {!login && (
        <div className={classes.input}>
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
      )}
      <div className={classes.input}>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>
      <div className={classes.input}>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      {!login && (
        <div className={classes.input}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Password" />
        </div>
      )}
      {!login && (
        <div className={classes.input}>
          <button>Sign Up</button>
          <p>
            Have an account?{" "}
            <span className={classes.toggle} onClick={toggleLogin}>
              Log In
            </span>
          </p>
        </div>
      )}
      {login && (
        <div className={classes.input}>
          <button>Log In</button>
          <p>
            Have an account?{" "}
            <span className={classes.toggle} onClick={toggleLogin}>
              Sign Up
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
