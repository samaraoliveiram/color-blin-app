import React from "react";
import "./App.css";
import { Surface } from "gl-react-dom";
import { Normalize } from "./components/Normalize";
import { Protanopia } from "./components/ColorScale";
import { Video } from "./components/Video";
import { Camera } from "./components/Camera";

function App() {
  return (
    <>
      <h1>dsfsfsd</h1>
      <Surface width={480} height={360}>
        <Normalize colorScale={Protanopia} interpolation="linear">
          {redraw => (
            <Video onFrame={redraw} autoPlay>
              <Camera></Camera>
            </Video>
          )}
        </Normalize>
      </Surface>
    </>
  );
}

export default App;
