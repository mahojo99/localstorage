import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './components/Register';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({username: "forsen", password: "forsen"})
  useEffect(() =>{
    localStorage.removeItem("User", JSON.stringify(user))
  },[])
  console.log(localStorage)
  return (
   <Routes>
    <Route element={<Layout/>}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />

    </Route>
   </Routes>
  );
}

export default App;
