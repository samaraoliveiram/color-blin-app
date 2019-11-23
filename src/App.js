import React from "react";
import "./App.css";
import Camera from "./components/camera";
import Colorify from "./components/shader";
import { Surface } from "gl-react-dom";

function App() {
  return (
    <>
      <Camera>
        <Surface width={480} height={360}>
          <Colorify></Colorify>
        </Surface>
      </Camera>
    </>
  );
}

export default App;
