// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInLayout from "./layouts/SignInLayout";
import SignUpLayout from "./layouts/SignUpLayout";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-600 min-h-screen">
      <div className="text-white flex items-center justify-center p-4">
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUpLayout />} />
            <Route path="/" element={<SignInLayout />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
