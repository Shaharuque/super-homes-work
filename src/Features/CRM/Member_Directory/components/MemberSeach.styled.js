import { BookingGlass } from "../../../Booking/Booking";
import styled from "styled-components";
import { devices } from "../../../../Misc/themes";

export const MemberSearchGlass=styled(BookingGlass)`
 background:transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:30px;
`;
export const SearchBar = styled.div`
  width: 600px;
  display: flex;
`;

export const Input = styled.input`
    width:100%;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.shadow};
    box-shadow: ${({ theme }) => theme.shadowconfig};
    border: 1px solid ${({ theme }) => theme.btnDark};
    text-align:center;
    &:focus {
      outline: none;
      /* box-shadow: 0px 0px 2px red; */
      border: 1px solid ${({ theme }) => theme.btnOK};
    }
  
`;
export const IconStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 3px;
  background-color: black;
  padding: 3px;
  cursor: pointer;
`;

export const SearchResultContainer=styled.div`
  background: ${(props) => props.theme.body};
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top:50px;
  
  //for very Large device show 4 col in 1 row
  @media screen and (min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }

 
`
export const PaginationButton=styled.button`
margin:5px;
padding:3px;
background-color:red;
color:white;
border-radius:5px;
cursor:pointer;
&:hover{
  background-color:teal;
}

`
