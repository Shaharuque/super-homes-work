import styled from "styled-components";
import { Glass } from "../../themes";

// const HomeContainer = styledComponents.div`
//     display:grid;
//     grid-template-columns: repeat(3,1fr);
//     grid-gap: 5rem;
//     padding:20px;
// `
const CardContainer = styled(Glass)`
    width:100%;
    height:100%;
    text-align:center;
    border-radius: ${({ br }) => (br ? br : "20px")};  
    padding:${({ pd }) => (pd ? pd : "0")};  
    cursor:pointer;

    h4{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:5px;
    }
    p{
        margin-bottom:5px;
    }
`;

export { CardContainer };
