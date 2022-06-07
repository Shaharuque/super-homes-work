import styled from "styled-components";
import { Glass } from '../../../../Misc/themes';

//Extending Glass style
export const Option=styled(Glass)`
    display:flex;
    justify-content:space-evenly;
    border-radius:4px;
    padding:20px;
`
export const OptionStyle=styled.div`
    background:${({selected,theme}) =>selected? theme.btnOK: theme.body};
    box-shadow:${(props) => props.theme.shadowconfig};
    padding:5px;
    border-radius:4px;
    cursor:pointer;
    color:${({selected,theme}) =>selected? theme.body: theme.fontColor};
    
`