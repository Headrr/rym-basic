import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Header = React.lazy(() => import("./components/header/index.jsx"));
const Content = React.lazy(() => import("./components/content/index.jsx"));
const UseApiComponent = React.lazy(() => import("./components/contentHook/index.jsx"));
const AsyncUseApiComponent = React.lazy(() => import("./components/asyncContentHook/index.jsx"));

export const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/api" element={<UseApiComponent />} />
          <Route path="/asyncApi" element={<AsyncUseApiComponent />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};
