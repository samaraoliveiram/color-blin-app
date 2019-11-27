import React, { useState } from "react";
import { Surface } from "gl-react-dom";
import { Normalize } from "./Normalize";
import { Video } from "./Video";
import { Camera } from "./Camera";
import { OptionBar } from "./OptionBar";
import { Filters } from "./Filters";
import { Intensity } from "./Intensity";

function useOptions() {
  const [value, set] = useState("");

  const setValue = v => {
    if (value === v) {
      set("");
    } else {
      set(v);
    }
  };

  return [value, setValue];
}

export const PrimaryScreen = () => {
  const [option, setOption] = useOptions();
  const [intensity, setIntensity] = useState(1);
  const [filter, setFilter] = useState(0);

  return (
    <>
      <Surface width={680} height={360}>
        <Normalize intensity={intensity} filter={filter}>
          {redraw => (
            <Video onFrame={redraw} autoPlay>
              <Camera></Camera>
            </Video>
          )}
        </Normalize>
      </Surface>
      <OptionBar
        setOption={setOption}
        options={[
          { icon: "bars", value: "intensity" },
          { icon: "bg-colors", value: "filters" }
        ]}
      >
        {option === "filters" && (
          <Filters
            setValue={setFilter}
            options={[
              { name: "Protanope", value: 1 },
              { name: "Deuteranope", value: 2 },
              { name: "Tritanope", value: 3 }
            ]}
          />
        )}
        {option === "intensity" && (
          <Intensity value={intensity} setValue={setIntensity} />
        )}
      </OptionBar>
    </>
  );
};
