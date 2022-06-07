import React from "react";
import DashBoard from "../../Misc/components/DashBoard/DashBoard";
import { ContainerGlass } from "./../../Misc/themes";

const HomePage = () => {
  return (
    <ContainerGlass tp={true} count="3">
      <DashBoard></DashBoard>
    </ContainerGlass>
  );
};

export default HomePage;
