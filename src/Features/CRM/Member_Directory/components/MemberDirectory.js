import React from "react";
import { CardContainer } from "../../../../Misc/components/DashBoard/dashBoardStyled";
import { Image } from "./MemberDirectory.styled";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MemberDirectory = ({ singleMember }) => {
  const { id, name, photo, phone_number, email, card_number } = singleMember;
  const navigate=useNavigate()
  const handleCardClick=(id)=>{
    navigate(`/search/${id}`)
  }

  return (
    <CardContainer onClick={()=>handleCardClick(id)} pd="20px">
      <Image src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" />
      <h4>{name}</h4>
      <h4>
        <FaMobileAlt /> {phone_number}
      </h4>
      <h4>
        <MdEmail /> {email}
      </h4>
      <h4>
        <FiCreditCard /> {card_number}
      </h4>
    </CardContainer>
  );
};

export default MemberDirectory;
