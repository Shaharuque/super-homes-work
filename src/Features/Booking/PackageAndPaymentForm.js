import React, { useState } from "react";
import "./CSS/PackageModal.css";
import styled from "styled-components";
import Bedsmodal from "./Bedsmodal";
import { FormGlass, Glass } from "./Booking";
import { FaCamera } from "react-icons/fa";

import useWindowDimensions from "../../../Common/WindowHook";

const PackageAndPaymentForm = ({ packageSelectionHandle,bedRef}) => {
  const [bedModalOpen, setbedModalOpen] = useState(false);
  const [selectedBed, setSelectedBed] = useState();
  const { height, width } = useWindowDimensions();

  const btnClicked = (bedName) => {
    //console.log('Btn clicked & the selected bed name:', bedName)
    setSelectedBed(bedName);
    setbedModalOpen(false);
  };

  const bedModalHandle = () => {
    // document.getElementsByClassName('Title')[0].style.visibility='hidden'
    // window.scrollTo(0, 0);
    setbedModalOpen(!bedModalOpen);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className={width>1600 ?"packageModalBackgroundNew":"packageModalBackground"} >
    {
      width>1600 ?
      null
      :
      <div>
      {
        !bedModalOpen &&
        <div className="right-side">
        <button
          className="closeBtn"
          onClick={() => packageSelectionHandle(false)}
        >
          X
        </button>
      </div>
    }
    </div>
    }

      {
        !bedModalOpen &&
        <div className="Title">
          <p>Package Seclection & Payment</p>
        </div>
      }

    <>
      <form onSubmit={submitForm} className="newUserForm">
        <div className="newUserItem">
          <label>Check-in Date</label>
          <input type="text" placeholder="First Name" />
        </div>

        {bedModalOpen ? (
          <Bedsmodal
            setbedModalOpen={setbedModalOpen}
            btnClicked={btnClicked}
          ></Bedsmodal>
        ) : null}

        <div className="newUserItem">
          <button onClick={bedModalHandle} className="bedButton">
            SELECT BED
          </button>
        </div>

        {/* Bed Id fetch ar por ai field a show korano lagbey */}  
        <div className="newUserItem">
          <label>Selected Bed</label>
          <input type="text" placeholder="Bed ID" value={selectedBed} ref={bedRef} />
        </div>

        <div className="newUserItem">
          <label>Card Number</label>
          <input type="text" placeholder="First Name" />
        </div>

        <div className="newUserItem">
          <label>Motobike parking</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="No">No</option>
            <option value="YES">YES</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Motobike parking</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="No">No</option>
            <option value="YES">YES</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Motobike parking</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="No">No</option>
            <option value="YES">YES</option>
          </select>
        </div>
      </form>
    </> 
    </div>
  );
};

export default PackageAndPaymentForm;


