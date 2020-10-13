import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { Button } from "react-bootstrap";
import Glogo from "../../images/icons/google.png";
import logo from "../../images/logos/logo.png";
import firebaseConfig from "./firebase.config";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  //google login hdandel code is

  const googleHandelLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(signedInUser);
        storAuthtoken();
        console.log(signedInUser);

        // ...
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storAuthtoken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
        console.log(idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="container mt-5 mb-5 text-center">
      <img style={{ height: "80px" }} src={logo} alt="" />
      <div className="col-md-8 offset-md-2 login-area text-center">
        <h2 className="mb-5">Login With</h2>
        <Button
          onClick={googleHandelLogin}
          style={{ border: "1px solid gray", borderRadius: "50px" }}
          variant="white"
          className="d-flex "
          size="lg"
          block
        >
          <img
            src={Glogo}
            className="d-flex justify-content-start "
            style={{ height: "40px" }}
            alt=""
          />
          <span className="ml-5 ">Continue With Google</span>
        </Button>
        <p>
          Don't have an acoount?
          <span>
            <Link onClick={googleHandelLogin} to="/login">
              Create an account
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
