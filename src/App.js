import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protect from "./components/Protect";
import PageNotFound from "./pages/PageNotFound";
import InterMediatoryAuth from "./pages/InterMediatory";
import UpdatePassword from "./pages/UpdatePassword";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home />
                </div>
              }
            />

            <Route path="/open-account" element={<h1>Open Acccount</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />
            <Route path="/auth" element={<InterMediatoryAuth />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
