import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { ThemeProvider } from "styled-components";
import Testing from "./Features/Booking/Testing";
import {} from "./Misc/components/Modal/modal";
import { ModalProvider } from "./Misc/components/Modal/modal_context";
import Sidebar from "./Misc/sidebar/sidebar";
import { darkTheme, GlobalStyle, lightTheme } from "./Misc/themes";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { PrivateRoutesDef, PublicRoutesDef } from "./Routes/RoutesDef";
import {
  getMemberData,
  searchMemberData,
  getMemberPackages,
  getMemberTransiction,
  getMemberRefreshmentItem,
  getMemberMealDetails,
  getMemberBedChange,
  getMemberPackageChange,
} from "./Features/CRM/Member_Directory/logic/member_directory.redux";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() {
  const sidebarState = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  //dispatching the aysnc actions
  React.useEffect(() => {
    // dispatch(getMemberData(2299));

    // dispatch(
    //   searchMemberData({
    //     page: 1,
    //     searchType: "all",
    //     TRXStatus: 1,
    //     keyword: "amin",
    //   })
    // );
    dispatch(
      getMemberPackages({
        member_Packages_CurrentPage: 1,
        member_Booking_id: 2256,
        member_id: 2299,
      })
    );
    dispatch(
      getMemberTransiction({
        memberBookingId: 10641,
        memberId: 10480,
        transactionCurrentPage: 1,
      })
    );
    dispatch(
      getMemberRefreshmentItem({
        memberBookingId: 10433,
        refreshmentItemsCurrentPage: 1,
      })
    );
    // dispatch(
    //   getMemberMealDetails({
    //     memberBookingId: 10641,
    //     memberId: 10480,
    //     mealCurrentPage: 3,
    //   })
    // );
    dispatch(
      getMemberBedChange({
        memberBookingId: 10641,
        memberId: 10480,
      })
    );
    dispatch(
      getMemberPackageChange({
        memberBookingId: 10641,
        memberId: 10480,
      })
    );
  }, []); //dependency must ashbey memberid and booking id cuz oigular basis state change effective hobey.

  return (
    <ThemeProvider theme={!sidebarState.dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ModalProvider>
      <StyledApp>
        {/* Stops Navbar From Rendering In Login Screen*/}
        {useLocation().pathname !== "/login" && <Sidebar />}
        <Routes>
          {/* Generates All The private Routes From PrivateRoutesDef Arrays*/}
          {PrivateRoutesDef.map((val) => {
            return (
              <Route key={val.path} path={val.path} element={<PrivateRoute />}>
                <Route path={val.path} element={val.component}>
                  {/* first level nested route generation  */}
                  {val.nested !== undefined &&
                    val.nested.length !== 0 &&
                    val.nested.map((nob) => {
                      return (
                        <Route
                        key={val.path + nob.path}
                          path={val.path + nob.path}
                          element={nob.component}
                        >
                          {/* second level nested route generation */}
                          {nob.nested !== undefined &&
                            nob.nested.length !== 0 &&
                            nob.nested.map((nob2) => {
                              return (
                                <Route
                                key={val.path + nob.path + nob2.path}
                                  path={val.path + nob.path + nob2.path}
                                  element={nob2.component}
                                />
                              );
                            })}
                        </Route>
                      );
                    })}
                </Route>
              </Route>
            );
          })}
          {/* Generates All The Public Routes From PublicRoutesDef Arrays*/}
          {PublicRoutesDef.map((val) => {
            return (
              <Route key={val.path} path={val.path} element={<PublicRoute />}>
                <Route path={val.path} element={val.component} />
              </Route>
            );
          })}
          {/* Booking.js public */}
          {/* <Route path="/booking" element={<Booking></Booking>}></Route> */}
          <Route path="/testing" element={<Testing></Testing>}></Route>
        </Routes>
        </StyledApp>
        </ModalProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
      />
    </ThemeProvider>
  );
}

export default App;
