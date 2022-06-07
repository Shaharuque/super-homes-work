// modal ar kaj kora hoisey
import React, { useState } from "react";
import styled from "styled-components";
import { baseClient } from "../../Misc/client";
import "./CSS/BedsModal.css";
import Tabs from "./Tabs";
import { CloseButton } from "./Testing";

const Bedsmodal = ({ setbedModalOpen, btnClicked, branchNumber }) => {
  const [buildingFloorsInfo, setBuildingFloorsInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  // (branchId=4 means super homes-5 data will be loaded)
  const branchId = branchNumber;

  //building info get staticly by using static branchId
  React.useEffect(() => {
    if (branchId !== undefined && branchId !== null) {
      baseClient
        .get("branch?branch_id=" + branchId)
        .then((response) => {
          setBuildingFloorsInfo(response.data.floors);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  console.log(buildingFloorsInfo);

  return (
    <BedModalBackground>
      <ButtonPosition>
        <LeftSide>
          <h2>
            BED SELECTION OVERVIEW (SUPER HOME - 0{parseInt(branchId) + 1})
          </h2>
        </LeftSide>
        <RightSide>
          <CloseButton onClick={() => setbedModalOpen(false)}>X</CloseButton>
        </RightSide>
      </ButtonPosition>

      <div>
        <div>
          {/* <h4 style={{ textAlign: "center" }}>
            This will be another simple tab component{" "}
          </h4> */}
        </div>
        <div className="tabStyle">
          <Tabs floors={buildingFloorsInfo} btnClicked={btnClicked}></Tabs>
        </div>
      </div>
    </BedModalBackground>
  );
};

export default Bedsmodal;

export const BedModalBackground = styled.div`
  width: 100%;
  /* height: 100%; */
  /* height: 100vh;
  width: 100vw; */
  /* max-width: 1650px;*/
  max-height: 1600px;
  background-color: #faf9f6;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 10px;
  z-index: 99;
`;
export const ButtonPosition = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: 2fr 1fr;

  /* padding: 20px; */
  background-color: teal;
  height: 40px;
  border-radius: 10px;
`;
export const LeftSide = styled.div`
  color: white;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export const RightSide = styled.div`
  display: flex;
  justify-content: end;
`;
