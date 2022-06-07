// Tabs ar kaj kora hoisey
import React, { useState } from "react";
import "./CSS/Tabs.css";
import Floors from "./Floors";

const Tabs = ({ floors, btnClicked }) => {
  const [toggleState, setToggleState] = useState("1st Floor"); //agey thkekei 1st Floor ar data load korey rakhar way

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        {floors.map((floor) => (
          <button
            onClick={() => toggleTab(floor.floor_name)}
            className={
              toggleState === floor.floor_name ? "tabs active-tabs" : "tabs"
            }
          >
            {floor.floor_name}
          </button>
        ))}
      </div>

      {floors.map((floor) => (
        <div className="content-tabs">
          <div
            className={
              toggleState === floor.floor_name
                ? "content  active-content"
                : "content"
            }
          >
            {floor.units.map((unit) => (
              <Floors
                unit={unit.unit_name}
                rooms={unit.rooms}
                btnClicked={btnClicked}
              ></Floors>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
