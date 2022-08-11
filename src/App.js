import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

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
import HeaderWhenNotLogged from "./components/headerWhenNotLogged/headerWhenNotLogged";
import {AuthContextProvider} from "./contexts/authContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const [isAuth,setIsAuth] = useState(false);
  console.log(isAuth);
  return (
    <Router>
    <div className="App">
    <AuthContextProvider>
    {isAuth ? <Header setIsAuth={setIsAuth}/> : <HeaderWhenNotLogged setIsAuth={setIsAuth}/>}
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/addPost"  element={<AddPost/>} />
          <Route path="/profile"  element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/details/:PostId"  element={<Details/>} />
          <Route path="/edit/:PostId"  element={<Edit/>} />
          <Route path="/login"  element={<Login setIsAuth={setIsAuth}/>} />  
          <Route path="/register"  element={<Register/>} />                
        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  </Router>
  );
}



export default App;
