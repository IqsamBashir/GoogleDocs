import "./App.css";
import Contact from "./pages/Toolbar";
import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import ToggleSidebar from "./sidebar/sideBar";

// 👇️ don't wrap in <Router>
export default function App() {
  return (
    <>
      <div>
        <ToggleSidebar />
        <Routes>
          <Route path="/Toolbar" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }
