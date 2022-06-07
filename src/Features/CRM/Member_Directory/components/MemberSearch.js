import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../../../Common/WindowHook";
import styled from "styled-components";

import {
  getSearchedMembersData,
  searchMemberData,
} from "../logic/member_directory.redux";
import MemberDirectory from "./MemberDirectory";
import {
  MemberSearchGlass,
  Wrapper,
  SearchBar,
  Input,
  IconStyle,
  SearchResultContainer,
  PaginationButton,
} from "./MemberSeach.styled";
import SearchOption from "./SearchOption";

export const memberSearchOptions = [
  { placeholder: "ALL/NID/CARD/NAME", type: "all", short: "ALL" },
  { placeholder: "CARD NUMBER", type: "card_number", short: "CARD" },
  { placeholder: "PHONE NUMBER", type: "phone", short: "PHONE" },
  { placeholder: "NID NUMBER", type: "nid", short: "NID" },
  { placeholder: "MEMBER NAME", type: "name", short: "NAME" },
  { placeholder: "TRANSACTION ID", type: "transaction", short: "TRX ID" },
];

const MemberSearch = () => {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(0);
  
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("all");
  const searchKeyRef = useRef("");
  const dispatch = useDispatch();

  //pagination
  const [page, setPage] = useState();
  console.log(page)
  
  //Getting window dimension
  const windowDimensions = useWindowDimensions();
  console.log(windowDimensions);

  //dispatching the aysnc actions and get all the members depending on search keyword(movie redux project follow korey korsilam )
  useEffect(()=>{
    if (keyword !=="" &&  keyword !==undefined && keyword !==null ) {
      dispatch(
        searchMemberData({
          page: page,
          searchType: memberSearchOptions[picked].type, //user jei type option pick korbey seita
          TRXStatus: 1,
          keyword:keyword, //user input in the search field
        })
      );
     }
  },[page,keyword,memberSearchOptions[picked].type])

  //---------------getting all the searched member data(more efficient way)----------
  const members = useSelector((state) => state.searchMember); //object ar sobgula property pabo (apiInitialValue) //useSelector((state)=>state.reducer) [NB. reducer can be found from store.js ]

  console.log(members.data)
  const membersArray = members?.data?.data;
  console.log(membersArray);
  //------------------------------------
  //validation part

  const focusHandler = () => {
    setOpen(true);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    //ai part tuku efficient na direct e.target.search.value diye we can get the user input
    // const keyword=searchKeyRef.current.value //searched value can be gathered
    // setKeyword(keyword)
    // setSearchType(memberSearchOptions[picked].type)
    // console.log(e.target.search.value);

    //async action dispatched(action called by sending some parameters)
    setKeyword(e.target.search.value);
  };

  // console.log('search keyword:',keyword)
  // console.log('search type:',searchType)

  return (
    <MemberSearchGlass>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <SearchBar>
            <Input
              onFocus={focusHandler}
              type="text"
              // ref={searchKeyRef}
              name="search"
              autofocus="true"
              placeholder={memberSearchOptions[picked].placeholder}
            />
            <IconStyle>
              <BsSearch />
            </IconStyle>
          </SearchBar>
          {open && (
            <SearchOption picked={picked} setPicked={setPicked}></SearchOption>
          )}
        </form>
      </Wrapper>

      {/* for showing loading */}
      {members.loading && <div color="white">Loading</div>}
      <SearchResultContainer>
        {membersArray?.map((singleMember) => (
          <MemberDirectory singleMember={singleMember}></MemberDirectory>
        ))}
      </SearchResultContainer>

        <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
        {/* for pagination */}
        {[...Array(members?.data?.last_page).keys()].map((number) => (
            <PaginationButton
              onClick={() => setPage(number+1)}
            >
              {number + 1}
            </PaginationButton>
          ))}
        </div>
      
    </MemberSearchGlass>
  );
};

export default MemberSearch;

