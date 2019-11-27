import "./App.css";
import React from "react";
import { PrimaryScreen } from "./components/PrimaryScreen";
import { TestScreen } from "./components/TestScreen";
import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <PrimaryScreen path="/" />
      <TestScreen path="/test" />
    </Router>
  );
}

export default App;
