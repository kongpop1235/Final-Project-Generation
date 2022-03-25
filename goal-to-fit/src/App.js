import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//css
import './App.css';

//Page
import Login from './Page/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}