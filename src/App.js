import { useState } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="container">{isLoggedIn ? <Layout /> : <LoginPage />}</div>
  );
};

export default App;
