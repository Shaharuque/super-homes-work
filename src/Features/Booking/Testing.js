import Moment from "moment";
import React from "react";
import styled from "styled-components";
import BookingCalender from "../../Common/BookingCalender";
import { Holder } from "../../Misc/themes.js";
import {
  FormButton,
  NewUserForm,
  NewUserSelect,
  SelectBed,
} from "./Booking";
import "./CSS/Testing.css";
import {NewUserItem} from "./Booking_InputFied";

//TODO bedModalOpen and setbedModalOpen is not needed so need to remove it
const Testing = ({
  bedRef,
  isOpen,
  setbedModalOpen,
  bedModalOpen,
  selectedBed,
  bedModalController,
}) => {
  const [btnClicked, setBtnClicked] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const formatDate = Moment(date).format("DD-MM-YYYY");
  const clicked = () => {
    setBtnClicked(!btnClicked);
  };

  return (
    <Holder open={isOpen}>
      <NewUserForm>
        <NewUserItem>
          <label>Check-in Date</label>
          <input
            value={formatDate}
            onClick={clicked}
            placeholder="First Name"
          />
          {/* <div onClick={clicked}>
            <BsCalendarDate/>
          </div> */}
          <div style={{ position: "relative" }}>
            {btnClicked && (
              <CalenderStyle>
                <BookingCalender
                  click={clicked}
                  date={date}
                  setDate={setDate}
                ></BookingCalender>
              </CalenderStyle>
            )}
          </div>
        </NewUserItem>

        <NewUserItem>
          <SelectBed onClick={bedModalController}>SELECT BED</SelectBed>
        </NewUserItem>

        {/* Bed Id fetch ar por ai field a show korano lagbey */}
        <NewUserItem>
          <label>Selected Bed</label>
          <input
            type="text"
            placeholder="Bed ID"
            value={selectedBed}
            ref={bedRef}
          />
        </NewUserItem>

        <NewUserItem>
          <label>Card Number</label>
          <input type="text" placeholder="First Name" />
        </NewUserItem>

        <NewUserItem>
          <label>Motobike parking</label>
          <NewUserSelect name="active" id="active">
            <option value="No">No</option>
            <option value="YES">YES</option>
          </NewUserSelect>
        </NewUserItem>

        <NewUserItem>
          <label>Motobike parking</label>
          <NewUserSelect name="active" id="active">
            <option value="No">No</option>
            <option value="YES">YES</option>
          </NewUserSelect>
        </NewUserItem>

        <NewUserItem>
          <label>Motobike parking</label>
          <NewUserSelect name="active" id="active">
            <option value="No">No</option>
            <option value="YES">YES</option>
          </NewUserSelect>
        </NewUserItem>

        <NewUserItem>
          <FormButton inverse="#1F3541" type="submit">
            SUBMIT FORM
          </FormButton>
        </NewUserItem>
      </NewUserForm>
      {/* </TestBackground> */}
    </Holder>
  );
};

export default Testing;

export const RightSide = styled.div`
  display: flex;
  justify-content: end;
`;
export const CloseButton = styled.button`
  width: 40px;
  color: white;
  border-radius: 10px;
  border: 1px solid rgb(128, 0, 0);
  background-color: rgb(128, 0, 0);
  height: 40px;
`;
export const CalenderStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
