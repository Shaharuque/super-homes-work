import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardContainer } from "../../../../../../Misc/components/DashBoard/dashBoardStyled";
import { PaginationButton } from "../../MemberSeach.styled";
import "./Dinng.css";

const Dining = () => {
  const [page, setPage] = useState();
  //useSelector use korey memberInfo extract kora hocchey
  const mealInfo = useSelector((state) => state.getSingleMemberDiningDetails); //state.reducer_name [getSingleMemberDiningDetails=reducer name]
  console.log(mealInfo)

  const mealdata = mealInfo?.data?.data;
  console.log(mealdata);

  let tableHead;
  if (mealdata) {
    tableHead = Object.keys(mealdata[0]);
    console.log(tableHead);
  }

  return (
    <CardContainer>
      <table id="customers">
        <tr>
          {tableHead?.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
        {/* {
           mealdata?.map(data=>{
           return <tr>
                    <td>{data?.id}</td>
                    <td>{data?.booking_id}</td>
                  </tr>})
       } */}
        {mealdata?.map((data) => {
          return (
            <tr>
              {Object.values(data).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          );
        })}
      </table>

      {/* for pagination aita tey kivabey j page set korboseita partese na*/}
      <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
        {[...Array(mealInfo?.data?.last_page).keys()].map((number) => (
            <PaginationButton
              onClick={() => setPage(number+1)}
            >
              {number + 1}
            </PaginationButton>
          ))}
        </div>
    </CardContainer>
  );
};

export default Dining;
