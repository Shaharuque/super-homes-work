import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { CardContainer } from "../../../../../Misc/components/DashBoard/dashBoardStyled";
import { TabStyle } from "./SingleMember.styled";

const Shop = () => {
const { _id } = useParams();

  return (
    <div style={{ padding: "5px" }}>
      <TabStyle>
          
        <CardContainer>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/search/" + _id + "/shop"+"/purchaseitem"}
          >
            PURCHASE ITEM
          </Link>
        </CardContainer>

        <CardContainer>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/search/" + _id + "/shop"+"/dining"}
          >
            DINING
          </Link>
        </CardContainer>
      </TabStyle>
      {/* for nesting routing  */}
      <Outlet></Outlet>
    </div>
  );
};

export default Shop;
