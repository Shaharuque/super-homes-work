import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { baseClient, csrfClient } from "../../Misc/client";
import { ModalContext } from "../../Misc/components/Modal/modal_context";
import { Glass, GlassForm } from "../../Misc/themes.js";
import BasicInfo from "./BasicInfo";
import Bedsmodal from "./Bedsmodal";
import "./CSS/Booking.css";
import Testing from "./Testing";

const Booking = () => {
  const nameRef = useRef("");
  const religionRef = useRef("");
  const bedRef = useRef("");
  // testing purpose
  const [test, setTest] = useState(false);
  const [basicSec, setBasicSec] = useState(true);
  const [bedModalOpen, setbedModalOpen] = useState(false);
  const [selectedBed, setSelectedBed] = useState();

  const [branchNames, setBranchNames] = useState([]);
  const [branchName, setBranchName] = useState("");
  const [branchId, setBranchId] = useState();
  const [error, setError] = useState();
  const { handleModal } = React.useContext(ModalContext);

  //Branch names and their ID fetch from api
  React.useEffect(() => {
    handleModal(<div>Hello</div>);
    baseClient
      .get("short_branch")
      .then((response) => {
        if (response.data.branch !== undefined) {
          setBranchNames(response.data.branch);
          setBranchName(response.data.branch[0].branch_name);
          setBranchId(response.data.branch[0].id);
          // setBranchNickName(response.data.branch[0].branch_nick_name);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const btnClicked = (bedName) => {
    //console.log('Btn clicked & the selected bed name:', bedName)
    setSelectedBed(bedName);
    setbedModalOpen(false);
  };
  const bedModalController = () => {
    setbedModalOpen(!bedModalOpen);
  };

  const sectionController = () => {
    setTest(!test);
    setBasicSec(false);
  };

  //OTP send function
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = React.useState("");
  const [tempOtp, setTempOtp] = React.useState();
  const [otpMessageShow, setOtpMessageShow] = React.useState(false);
  const [otpConfirmation, setOtpConfirmation] = React.useState(false);
  const [otpConfirmationMessage, setOtpConfirmationMessage] = React.useState(
    "Collect OTP providing a phone number"
  );
  const [canSendOtp, setCanSendOtp] = React.useState(true);

  //phone_number ar basis
  React.useEffect(() => {
    if (phoneNumber.length === 11) {
      csrfClient
        .post("member_send_otp", {
          phone: phoneNumber,
        })
        .then((response) => {
          if (
            response.data.status !== undefined &&
            response.data.status === true
          ) {
            setOtpMessageShow(true);
            if (response.data.otp !== undefined) {
              setTempOtp(response.data.otp);
              console.log(tempOtp);
            }
            setCanSendOtp(false);
            canSendOtpFunction();
            setOtp("");
            setOtpConfirmation(false);
          }
        })
        .catch((error) => {
          setOtpMessageShow(false);
        });
    }
  }, [phoneNumber]);

  //otp validation
  React.useEffect(() => {
    if (otp !== undefined && otp !== null) {
      if (otp.length === 4) {
        csrfClient
          .post("member_check_otp", {
            phone: phoneNumber,
            otp: otp,
          })
          .then((response) => {
            if (response.data.status === true) {
              setOtpConfirmationMessage("VALID OTP");
              setOtpConfirmation(true);
              setOtpMessageShow(false);
            } else {
              setOtpConfirmationMessage("Wrong OTP");
              setOtpConfirmation(false);
              setOtpMessageShow(false);
            }
          })
          .catch((error) => {
            setOtpMessageShow(false);
          });
      } else if (otp.length === 0) {
        setOtpConfirmation(false);
        setOtpConfirmationMessage("Please Provide a valid OTP");
      } else {
        setOtpConfirmation(false);
        setOtpConfirmationMessage("Wrong OTP");
      }
    }
  }, [otp]);

  function canSendOtpFunction() {
    setTimeout(() => setCanSendOtp(true), 30000);
  }

  return (
    <BookingGlass>
      {bedModalOpen && (
        <Bedsmodal
          setbedModalOpen={setbedModalOpen}
          btnClicked={btnClicked}
          branchNumber={branchId}
        />
      )}

      <HeaderName>BOOKING FORM</HeaderName>

      <NewUser>
        {/* <div className="Title">
            <p>Basic Info</p>
          </div> */}
        {/* <FormGlass> */}
        <Title onClick={() => setBasicSec(!basicSec)}>
          <div>Basic Informations</div>
          {basicSec ? (
            <div>
              <IoIosArrowDown />
            </div>
          ) : (
            <div>
              <BsArrowRight />
            </div>
          )}
        </Title>
        <Formik
          initialValues={{}}
          validateOnMount
          onSubmit={(e) => {
            console.log(e);
          }}
        >
          {({ setValues, values, errors, isSubmitting, ...rest }) => {
            return (
              <Form>
                <BasicInfo
                  isOpen={basicSec}
                  nameRef={nameRef}
                  religionRef={religionRef}
                  branchNames={branchNames}
                  setBranchId={setBranchId}
                  setPhoneNumber={setPhoneNumber}
                  tempOtp={tempOtp}
                ></BasicInfo>
                {/* {!basicSec ? (
            <BasicInfo nameRef={nameRef} religionRef={religionRef}></BasicInfo>
          ) : null} */}

                {/*02.Packages and payment part */}
                <Title onClick={sectionController}>
                  <div>Packages And Payment</div>
                  {test ? (
                    <div>
                      <IoIosArrowDown />
                    </div>
                  ) : (
                    <div>
                      <BsArrowRight />
                    </div>
                  )}
                </Title>
                {/* HERE: <Testing/> is acts like Packages and payment part */}
                <Testing // btnClicked={btnClicked}
                  isOpen={test}
                  setTest={setTest}
                  bedRef={bedRef}
                  selectedBed={selectedBed}
                  setbedModalOpen={setbedModalOpen}
                  bedModalOpen={bedModalOpen}
                  bedModalController={bedModalController}
                  branchId={branchId}
                />

                {/* 
          {!test && (
            <Title onClick={() => setTest(!test)}>
              <div>Package Selection & Payment</div>
              <div>
                <BsArrowRight></BsArrowRight>
              </div>
            </Title>
          )} */}
              </Form>
            );
          }}
        </Formik>
        {/* </FormGlass> */}
      </NewUser>
    </BookingGlass>
  );
};

export default Booking;

//TODO: This should be imported from theme file
export const BookingGlass = styled(Glass)`
  position: relative;
  //scroll bar given
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  max-width: 1366px; /*Ai jaiage change ar maddhomey i did increase the root container which holds the form */
  @media screen and (max-width: 600px) {
    padding: 30px;
    gap: 30px;
    max-width: 600px;
    flex-direction: column;
  }
`;
export const HeaderName = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-family: sans-serif;
`;

//To use FromGlass in to other component we going to export it
export const FormGlass = styled(GlassForm)`
  padding: 20px;
`;

export const NewUser = styled.div`
  /* flex: 4; */
  padding: 0 40px;
`;
export const NewUserForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  //for Large device show 4 col in 1 row
  @media screen and (min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  //for sssmal device 1 col for each row
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const Title = styled.div`
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 5px 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
// export const NewUserItem = styled.div`
//   /* width: 400px; */ /*Important fact */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-top: 10px;

//   label {
//     margin-bottom: 3px;
//     font-weight: 500;
//     font-family: sans-serif;
//     font-size: 14px;
//     color: rgba(0, 0, 0, 0.6);
//   }
//   input {
//     background-color: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.fontColor};
//     padding: 10px;
//     border: 1px solid ${({ theme }) => theme.shadow};
//     box-shadow: ${({ theme }) => theme.shadowconfig};
//     &:focus {
//       outline: none;
//       /* box-shadow: 0px 0px 2px red; */
//       border: 1px solid ${({ theme }) => theme.btnDark};
//     }
//   }
// `;
export const NewUserSelect = styled.select`
  height: 50px;
  border-radius: 5px;
`;
export const FormButton = styled.button`
  background-color: ${({ inverse }) => (inverse ? inverse : "teal")};
  color: white;
  width: 100%;
  height: 50px;
  margin-top: 25px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: lightcoral;
  }
`;

export const SelectBed = styled.div`
  background-color: lightblue;
  color: black;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  &:hover {
    background-color: lightcoral;
    color: white;
  }
`;
export const ImageContainer = styled.div``;
