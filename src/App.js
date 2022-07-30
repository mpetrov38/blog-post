import "./App.css";
import { useState, useEffect } from "react";
import Home from "./home/home";
import Details from "./details/details";
import Edit from "./edit/edit";
import Footer from "./footer/footer";
import Header from "./header/header";
import Login from "./login/login";
import Register from "./register/register";
import Profile from "./profile/profile";
import AddPost from "./addPost/addPost";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Details />
      <Edit />
      <Footer />
      <Login />
      <Register />
      <Profile />
      <AddPost />
    </div>
  );
}

export default App;
