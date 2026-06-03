import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
