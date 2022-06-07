import styled from "styled-components";
import { Glass } from "../themes";

export const FormInputContainer = styled(Glass)`
  width: 100%;
  white-space: nowrap;
  padding: 10px 20px;
  label {
    font-size: 25;
    font-weight: bold;
  }
`;
export const FormInputWrapper = styled.div`
  padding: 10px;
  width: 100%;
  input {
    padding: 8px;
    width: 100%;
    height: 30px;
    min-width: 100%;
    color: ${(props) => props.theme.fontColor};
    border: none;
    border-radius: 5px;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
  .form_button {
    position: absolute;
    display: flex;
    align-items: center;
    height: 30px;
    top: calc(50% - 6px);
    border: 0;
    cursor: pointer;
    z-index: 99;
    backdrop-filter: blur(30px);
    background-color: ${(props) => props.theme.body};
  }
`;
