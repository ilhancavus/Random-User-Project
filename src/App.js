//https://randomuser.me/api/?results=5

import "./App.css";

import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
};

export default App;
