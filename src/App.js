import { BrowserRouter as Router, Route,Routes, Redirect } from 'react-router-dom';

import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/home/home";
import Details from "./components/details/details";
import Edit from "./components/edit/edit";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Profile from "./components/profile/profile";
import AddPost from "./components/addPost/addPost";
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
