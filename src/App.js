import "./App.css";
import React from "react";
import { PrimaryScreen } from "./components/PrimaryScreen";
import LandingScreen from "./components/LandingScreen.jsx";
import { TestScreen } from "./components/TestScreen";
import { Router } from "@reach/router";

import { Layout } from "antd";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <LandingScreen path="/" />
        <TestScreen path="/teste" />
        <PrimaryScreen path="/camera" />
      </Router>
    </Layout>
  );
}

export default App;
