import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Home from "./pages/Home";
import Courses from "./pages/Courses"; // Fixed duplicate import
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
