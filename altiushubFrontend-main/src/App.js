import React,{useState} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const setToken=(userToken)=>{
    localStorage.setItem('token', JSON.stringify(userToken));
}

const getToken=()=>{
      const tokenstring = localStorage.getItem('token');
      const userToken=JSON.parse(tokenstring);
      return userToken?.token
    }

function App() {
   const [token, settoken] = useState(getToken());
  if(!token){
    return <Login settoken={settoken}/> 
  }

  return (
    <>
    <h1>TaskRabbit</h1>
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
