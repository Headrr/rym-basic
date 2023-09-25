import React from "react";
import Header from "./components/header/index.jsx";
import Content from "./components/content/index.jsx";
import UseApiComponent from "./components/contentHook/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/api" element={<UseApiComponent />} />
      </Routes>
    </React.Fragment>
  );
};
