import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Friends from "./pages/Friends";
import AddExpense from "./pages/transactions/AddExpense";
import AddIncome from "./pages/transactions/AddIncome";
import ImageForm from "./components/ImageForm";
import TradingViewWidget from "./components/TradingViewWidget";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import Translator from "./components/Translator";
import Chat from "./pages/Chat";
import { Dashboard2 } from "./pages/Dashboard2";
import HowsMarket from "./pages/HowsMarket";
import Chatbot from "./components/Chatbot";


const App = () => {
  return (
    <>
      <div className="bg-[#02031C] flex flex-col items-center text-white min-h-screen">
        <Navbar /> 
        <Chatbot />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/add/expense" element={<AddExpense />} />
          <Route path="/add/income" element={<AddIncome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/image" element={<ImageForm />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/hows-market" element={<HowsMarket />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
