import { Field } from "formik";
import React from "react";
import { FaCamera, FaImage } from "react-icons/fa";
import styled from "styled-components";

export const BookingInputFied = ({ labeltxt, name, type, placeholder }) => {
  return (
    <NewUserItem>
      <label>{labeltxt}</label>
      <Field
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        autoComplete="new-password"
      />
    </NewUserItem>
  );
};
export const BookingImageFied = ({
  labeltxt,
  name,
  placeholder,
  cameraLauncher,
  imgPreview,
}) => {
  return (
    <NewUserItem>
      <label>{labeltxt}</label>
      <ImagePickerContainer>
        <Field
          name={name}
          type="file"
          accept="image/*"
          onChange={(e) => {
            console.log(e);
          }}
          placeholder={placeholder}
        />
        <FaCamera size={30} onClick={cameraLauncher} />
        <FaImage size={30} onClick={imgPreview} />
      </ImagePickerContainer>
    </NewUserItem>
  );
};

export const BookingSelectFied = ({ labeltxt, name, placeholder, options }) => {
  return (
    <NewUserItem>
      <label>{labeltxt}</label>
      <Field
        name={name}
        as="select"
        placeholder={placeholder}
        autoComplete="new-password"
      >
        <option>Select Please</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
    </NewUserItem>
  );
};

export const NewUserItem = styled.div`
  /* width: 400px; */ /*Important fact */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;

  label {
    margin-bottom: 3px;
    font-weight: 500;
    font-family: sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.fontColor};
  }
  input,
  select {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.shadow};
    box-shadow: ${({ theme }) => theme.shadowconfig};
    &:focus {
      outline: none;
      /* box-shadow: 0px 0px 2px red; */
      border: 1px solid ${({ theme }) => theme.btnDark};
    }
  }
`;
const ImagePickerContainer = styled.div`
  display: flex;
  flex-direction: Row;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;
