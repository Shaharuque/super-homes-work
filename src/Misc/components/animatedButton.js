import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { minmax } from "../../Redux/reducers/sidebar";
import { globalAnimation } from "../animations";
import { AniBar } from "../themes";

// import "./animatedButton.scss";

const AnimatedButtonContainer = styled(animated.div)`
  position: relative;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.body};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;
const AnimatedButton = () => {
  // @ts-ignore
  const sidebarState = useSelector((state) => state.sidebar);
  const dispatcher = useDispatch();

  const bar1 = useSpring({
    to: {
      width: !sidebarState.min ? "60%" : "25%",
      y: !sidebarState.min ? 0 : -15,
      rotate: !sidebarState.min ? 45 : 0,
    },
    config: globalAnimation,
  });
  const bar2 = useSpring({
    to: {
      x: !sidebarState.min ? 60 : 0,
    },
    config: globalAnimation,
  });
  const bar3 = useSpring({
    to: {
      width: !sidebarState.min ? "60%" : "35%",
      y: !sidebarState.min ? 0 : 15,
      rotate: !sidebarState.min ? -45 : 0,
    },
    config: globalAnimation,
  });
  return (
    <AnimatedButtonContainer
      onClick={() => {
        dispatcher(minmax());
      }}
    >
      <AniBar style={bar1}></AniBar>
      <AniBar style={bar2}></AniBar>
      <AniBar style={bar3}></AniBar>
    </AnimatedButtonContainer>
  );
};
export default AnimatedButton;
