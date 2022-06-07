import { Form } from "formik";
import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fafafa",
  fontColor: "#1a1a1a",
};
export const darkTheme = {
  body: "#161D31",
  fontColor: "#d0d2d6",
  card: "#283046",
  shadow: "#22292f3d",
  shadowconfig: "0 4px 24px 0 rgb(34 41 47 / 24%)",
  btnDark: "#7367f0",
  btnDanger: "#ea5455",
  btnOK: "#28c76f",
};
//For using media query
//create an object which holds the sizes
const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
// Defining devices
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

//Global styling so this can be used anywhere
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: ${(props) => props.theme.body};
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}
::-webkit-scrollbar{
  width: 5px;
}
::-webkit-scrollbar-track{
  background-color: ${(props) => props.theme.body}00;
}
::-webkit-scrollbar-thumb{
  background:${(props) => props.theme.fontColor} ;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover{
   background-color:red;
}
`;

export const Glass = styled.div`
  box-shadow: ${(props) => props.theme.shadowconfig};
  border: 2px solid rgba(255, 255, 255, 0);
  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.fontColor};
`;
export const GlassForm = styled(Form)`
  box-shadow: ${(props) => props.theme.shadowconfig};
  border-radius: 1rem;
  background: ${(props) => props.theme.body}66;
  color: ${(props) => props.theme.fontColor};
`;
export const AniBar = styled(animated.div)`
  position: absolute;
  width: 60%;
  height: 5%;
  left: 15%;
  background-color: ${(props) => props.theme.fontColor};
  border-radius: 4px;
`;

export const ContainerGlass = styled(Glass)`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  background: ${({ tp, theme }) => (tp ? "transparent" : theme.card)};
  display: grid;
  width: 100%;
  /* grid-template-columns: 1fr 1fr ; */
  grid-template-columns: repeat(${({ count }) => (count ? count : 3)}, 1fr);
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  max-width: ${({ wm }) => (wm ? wm : "")};
  @media screen and (max-width: 600px) {
    padding: 30px;
    gap: 30px;
    flex-direction: column;
  }
`;

//TODO: This is for basicInformations section and packages section handler styled component code
export const Holder = styled.div`
  box-shadow: ${(props) => props.theme.shadowconfig};
  background: ${({ theme, open }) => (open ? theme.card : theme.body + "00")};
  color: ${({ theme, open }) =>
    open ? theme.fontColor : theme.fontColor + "00"};
  border-radius: 10px;
  padding: ${({ open }) => (open ? "10px" : "0")};
  height: ${({ open }) => (open ? "auto" : 0)};
  width: ${({ open }) => (open ? "auto" : 0)};
  overflow: ${({ open }) => (open ? "" : "hidden")};
`;
