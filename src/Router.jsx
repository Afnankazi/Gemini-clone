import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Chatpage from './components/Chatpage';

import { useAuth0 } from "@auth0/auth0-react";
import ChatApp from './pages/ChatApp';
const Router = () => {
  const {user , isAuthenticated , isLoading} = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
        console.log(isAuthenticated);
        
        <Route path='/' element={<Home/>} />
       
          <Route path='/chatpage/:id' element={ isAuthenticated  ?< ChatApp /> :<Navigate to="/" /> } />
        
        

    </Routes>
  )
}

export default Router
