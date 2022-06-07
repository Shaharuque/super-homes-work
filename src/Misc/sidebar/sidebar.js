// import "./sidebar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { globalAnimation } from "../animations";
import AnimatedButton from "../components/animatedButton";

const SidevarButton = styled.div`
  height: 50px;
  min-height: 50px;
  min-width: 50px;
  width: 50px;
`;

const SidebarContainer = styled(animated.div)`
  box-shadow: ${(props) => props.theme.shadowconfig};
  backdrop-filter: blur(10px);
  /* border-radius: 1rem; */
  border: 2px solid rgba(255, 255, 255, 0);
  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.fontColor};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  gap: 5px;
  z-index: 1;
  @media screen and (max-width: 800px) {
    position: fixed;
    z-index: 100;
  }
`;
const SidebarHeader = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25;
  white-space: nowrap;
`;
const Sidebar = () => {
  // @ts-ignore
  const sidebarState = useSelector((state) => state.sidebar);
  const sbprops = useSpring({
    to: {
      width: sidebarState.close ? 0 : sidebarState.min ? 100 : 300,
      minWidth: sidebarState.close ? 0 : sidebarState.min ? 100 : 300,
    },
    config: globalAnimation,
  });
  const headerFont = useSpring({
    to: {
      width: sidebarState.min ? "0" : "100%",
    },
    config: globalAnimation,
  });

  return (
    <SidebarContainer style={sbprops}>
      <SidebarHeader>
        <animated.div style={{ ...headerFont, overflow: "hidden" }}>
          Hello
        </animated.div>

        <SidevarButton>
          <AnimatedButton />
        </SidevarButton>
      </SidebarHeader>

      <SidebarHeader>
        <animated.div style={{ ...headerFont, overflow: "hidden" }}>
          <Link
            style={{ textDecoration: "none", color: "white",fontFamily:'New Times-roman' }}
            to="/booking"
          >
            Booking
          </Link>
        </animated.div>
      </SidebarHeader>
      <SidebarHeader>
        <animated.div style={{ ...headerFont, overflow: "hidden" }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/krax_booking"
          >
            Booking
          </Link>
        </animated.div>

        {/* <SidevarButton>
          <AnimatedButton />
        </SidevarButton> */}
      </SidebarHeader>

      <SidebarHeader>
        <animated.div style={{ ...headerFont, overflow: "hidden" }}>
          <Link
            style={{ textDecoration: "none", color: "white",fontFamily:'New Times-roman'}}
            to="/search"
          >
            Member Search Directory
          </Link>
        </animated.div>

        {/* <SidevarButton>
          <AnimatedButton />
        </SidevarButton> */}
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;
