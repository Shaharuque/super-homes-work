import React, { useState } from "react";
// import Bedsmodal from "./Bedsmodal";
import { FaCamera } from "react-icons/fa";
import styled from "styled-components";
import Swal from "sweetalert2";
// import "./CSS/Booking.css";
import CustomSelect from "../../Common/CustomSelect";
import { Holder } from "../../Misc/themes";
// import Testing from "./Testing";
import { NewUserForm} from "./Booking";
import {
  BookingImageFied,
  BookingInputFied,
  BookingSelectFied,
  NewUserItem
} from "./Booking_InputFied";
import PopUpModal from "./CameraCode/PopUpModal";
import "./CSS/Booking.css";

const BasicInfo = ({
  nameRef,
  religionRef,
  isOpen,
  branchNames,
  setBranchId,

}) => {
  const [use, setUse] = useState(false);
  // const [popUpModal, setPopUpModal] = useState(false);
  const [image, setImage] = useState("");

  const options = [
    { label: "Police Verification", value: "Police Verification" },
    { label: "NID", value: "NID" },
    { label: "Driving licence", value: "Driving licence" },
    { label: "Passport", value: "Passport" },
  ];

  const [seletedOption, setSelectedOption] = useState("");
  function onChangeInput(value) {
    console.log(value);
    value.map((option) => setSelectedOption(option?.value));
  }
  const handleBranchIdChange = (e) => {
    setBranchId(e.target.value);
  };
  //console.log(image);

  //Image previewer code
  function DocumentOrImagePreviewFunction(imageUrl) {
    Swal.fire({
      width: 620,
      imageUrl: imageUrl,
      // imageWidth: 580,
      // imageHeight: 580,
      imageAlt: "Custom image",
      cancelButtonColor: "#d1213c",
      allowOutsideClick: true,
      showCancelButton: false,
      backdrop: `
      rgba(69, 164, 247,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    });
  }

  return (
    <Holder open={isOpen}>
      <NewUserForm>
        {/* TODO:Phone number diley otp generate hobey */}

        <BookingInputFied
          labeltxt="Phone Number"
          name="phoneNumber"
          placeholder="+088 01855435493"
        />
        <BookingInputFied labeltxt="OTP" name="otp" placeholder="OTP" />
        <BookingInputFied
          labeltxt="Email"
          name="email"
          type="email"
          placeholder="shaik@gmail.com"
        />
        <BookingInputFied
          labeltxt="NID Number"
          name="NidNumber"
          placeholder="111-123-456-78"
        />
        <BookingInputFied
          labeltxt="Full Name"
          name="fullname"
          placeholder="Full Name"
        />

        <BookingSelectFied
          labeltxt="Religion"
          name="religion"
          options={["Islam", "Hindu", "Christian", "Buddhist", "Other"]}
          placeholder="Religion"
        />
        <BookingSelectFied
          labeltxt="How Did you find Us"
          name="howToFIndUs"
          options={[
            "SH Member",
            "SH Share Holder",
            "News Paper",
            "Google",
            "Facebook",
            "SMS",
            "Youtube",
            "Parents",
            "TVC",
            "Friends",
            "Colleague",
            "I don't Know",
          ]}
          placeholder="How Did you find Us"
        />

        <BookingInputFied
          labeltxt="Reference ID"
          name="referenceId"
          placeholder="Reference ID"
        />

        {/* TODO: Redesign Camera part */}
        {use && (
          <PopUpModal setOpenModal={setUse} setImage={setImage}></PopUpModal>
        )}
        {/* <NewUserItem>
          <label>Profile Image</label>
          <input type="file" id="myFile"></input>
          <ImageIcon
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => setUse(true)}
          >
            <FaCamera>Capture Image</FaCamera>
            <img
              height="20px"
              width="40px"
              src={image}
              onClick={(e) => {
                DocumentOrImagePreviewFunction(image);
              }}
            />
          </ImageIcon>
        </NewUserItem> */}

        <BookingImageFied
          labeltxt="Profile Image"
          name="image"
          cameraLauncher={() => setUse(true)}
          imgPreview={(e) => {
            DocumentOrImagePreviewFunction(image);
          }}
          placeholder="Profile Image"
        />
        <BookingInputFied
          labeltxt="Fathers Name"
          name="fathersName"
          placeholder="Fathers Name"
        />
        <BookingInputFied
          labeltxt="Emergency Contact Name"
          name="emergencyContactName"
          placeholder="Emergency Contact Name"
        />
        <BookingInputFied
          labeltxt="Emergency Contact Number"
          name="emergencyNumber"
          placeholder="Emergency Contact Number"
        />
        <BookingSelectFied
          labeltxt="Occupation"
          name="occupation"
          options={[
            "Student",
            "Job Holder",
            "Business Man",
            "Teacher",
            "Doctor",
            "Driver",
            "Housewife",
          ]}
          placeholder="How Did you find Us"
        />
        <BookingSelectFied
          labeltxt="Blood Group"
          name="bloodGroup"
          options={[
            "A+",
            "A-",
            "B+",
            "B-",
            "O+",
            "O-",
            "AB+",
            "AB-",
            "Unknown",
          ]}
          placeholder="Blood Group"
        />

        <BookingInputFied
          labeltxt="Member Type"
          name="memberType"
          placeholder="Member Type"
        />
        <BookingInputFied
          labeltxt="Address"
          name="address"
          placeholder="Address"
        />
        {/*Need to change The Select Structre
        Select Shoudl take A Value and A Key
        */}
        {/* <BookingSelectFied
          labeltxt="Branch Name"
          name="branchName"
          options={branchNames}
          placeholder="Branch Name"
        /> */}

        <BookingInputFied
          labeltxt="Remarks"
          name="remarks"
          placeholder="Remarks"
        />

        <NewUserItem>
        <label>Document Type</label>
          <CustomSelect
            isMulti={true}
            onChange={onChangeInput}
            options={options}
            label="Select Document Type"
          />
        </NewUserItem>
      </NewUserForm>

      {seletedOption === "Police Verification" ? (
        <NewUserItem>
          <input type="file" id="myFile"></input>
          <ImageIcon onClick={() => setUse(true)}>
            <FaCamera />
            Click to Pick Image
          </ImageIcon>
        </NewUserItem>
      ) : null}
    </Holder>
  );
};

export default BasicInfo;

const ImageIcon = styled.div`
  color: rgb(70, 70, 70);
  display: flex;
  font-family: sans-serif;
  font-size: 18px;
  padding: 5px;
  width: 100%;
  &:hover {
    color: aqua;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
