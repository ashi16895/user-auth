
import React, {useState} from "react";
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preference from './components/Preference';
import Login from './components/Login';
import useToken from './components/hooks/UseToken';



function App() {
  const { token, setToken } = useToken();
  

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <h1>Application</h1>
  
      <BrowserRouter>
      <Routes>
        
        <Route path="/preference" element={<Preference/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
