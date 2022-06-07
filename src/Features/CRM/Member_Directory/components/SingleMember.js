import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMemberData,
  getMemberMealDetails,
} from "../logic/member_directory.redux";
import { CardContainer } from "../../../../Misc/components/DashBoard/dashBoardStyled";
import "../components/SingleMemberInfo/Shop/Dinng.css";
import { SingleMemberContainer, TabStyle } from "./SingleMemberInfo/SingleMember.styled";


const SingleMember = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  //useSelector use korey memberInfo extract kora hocchey
  const memberInfo = useSelector((state) => state.memberdata);
  console.log(memberInfo);

  //dispatch getMemberData async action from member_directory.redux and using useEffect to fetch single member data dynamically
  useEffect(() => {
    dispatch(
      getMemberData(_id) //dynamiclly member id ar basis a member info dispatched
    );

    dispatch(
      getMemberMealDetails({
        memberBookingId: memberInfo?.data?.booking_id,
        memberId: _id,
        mealCurrentPage: 1,
      })
    );
  }, [_id, memberInfo?.data?.booking_id]);

  return (
    <SingleMemberContainer>
      {/* CardContainer silo */}
      <CardContainer>
        <div style={{marginTop:'100px'}}>
          <img
            style={{ width: "100px", borderRadius: "50%" }}
            src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"
          />
          <table id="customers">
            <tr>
              <td>Member ID</td>
              <td>{_id}</td>
            </tr>
            <tr>
              <td>Booking ID</td>
              <td>{memberInfo?.data.booking_id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{memberInfo?.data.full_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{memberInfo?.data.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{memberInfo?.data.phone_number}</td>
            </tr>
            <tr>
              <td>Occupation</td>
              <td>{memberInfo?.data.occupation}</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>{memberInfo?.data.religion}</td>
            </tr>
            <tr>
              <td>Fathers Name</td>
              <td>{memberInfo?.data.father_name}</td>
            </tr>
            <tr>
              <td>NID</td>
              <td>{memberInfo.data.nid}</td>
            </tr>
            <tr>
              <td>Emergency Name</td>
              <td>{memberInfo.data.emergency_name}</td>
            </tr>
            <tr>
              <td>Emergency Number</td>
              <td>{memberInfo.data.emergency_number}</td>
            </tr>
          </table>
        </div>
      </CardContainer>
      <div>
        <TabStyle>
          <CardContainer>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/search/" + _id + "/shop"}
            >
              SHOP
            </Link>
          </CardContainer>

          <CardContainer>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/search/" + _id + "/rental"}
            >
              RENTAL INFO
            </Link>
          </CardContainer>

          <CardContainer>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/search/" + _id + "/package-shifting"}
            >
              SHIFTING
            </Link>
          </CardContainer>
          
          <CardContainer>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/search/" + _id + "/transaction"}
            >
              TRANSACTION
            </Link>
          </CardContainer>
        </TabStyle>

        {/* for nesting routing  */}
        <Outlet />
      </div>
    </SingleMemberContainer>
  );
};

export default SingleMember;
