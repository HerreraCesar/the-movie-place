import Loader from "../../sections/loader/Loader";
import Login from "../../sections/login/Login";
import React from "react";

const Account = () => {
  return (
    <div id="account">
      <Loader />
      <Login />
    </div>
  );
};

export default Account;
