import { BrowserRouter as Router, Route,Routes, Redirect } from 'react-router-dom';

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
import HeaderWhenNotLogged from "./headerWhenNotLogged/headerWhenNotLogged";

function App() {

  return (
    <Router>
    <div className="App">
      <Header /> 
      <HeaderWhenNotLogged/>
        <Routes>
          <Route path="/" exact component={<Home/>} />
          <Route path="/add" exact component={<AddPost/>} />
          <Route path="/profile" exact component={<Profile/>} />
          <Route path="/details/:PostId" exact component={<Details/>} />
          <Route path="/edit/:PostId" exact component={<Edit/>} />
          <Route path="/login" exact component={<Login/>} />  
          <Route path="/register" exact component={<Register/>} />                
        </Routes>
      <Footer />
    </div>
  </Router>
  );
}



export default App;
