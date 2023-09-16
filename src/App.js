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
import OpenAccount from "./components/OpenAccount/OpenAccount";
import FinancialManagment from "./components/FinancialManagement/FinancialManagment";
import GoalSetter from "./components/GoalSetter/GoalSetter";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={
            <Home />}
          />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/management" element={<FinancialManagment />} />
          <Route path="/goalsetter" element={<GoalSetter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updatePassword" element={<UpdatePassword />} />
          <Route path="/auth" element={<InterMediatoryAuth />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
