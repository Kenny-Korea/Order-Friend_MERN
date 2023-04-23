import { useState } from "react";
import "./styles.scss";
import "./minireset.css";
import Layout from "./components/layouts/layout";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/menu";
import Sidebar from "./components/layouts/sidebar";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Menu />
            </>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
