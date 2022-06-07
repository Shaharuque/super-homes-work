import React from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import { fasterAnimation } from "../animations";
import { AniBar } from "../themes";

const AnimatedCrossContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
`;
const AnimatedCross = ({ open }) => {
  const bar1 = useSpring({
    to: {
      width: 28,
      height: 1,
      left: open ? -15 : 0,
      rotate: !open ? 45 : 90,
    },
    config: fasterAnimation,
  });

  const bar3 = useSpring({
    to: {
      width: 28,
      height: 1,
      left: open ? -15 : 0,
      rotate: !open ? -45 : -90,
    },
    config: fasterAnimation,
  });
  return (
    <AnimatedCrossContainer>
      <AniBar style={bar1}></AniBar>
      <AniBar style={bar3}></AniBar>
    </AnimatedCrossContainer>
  );
};
export default AnimatedCross;
