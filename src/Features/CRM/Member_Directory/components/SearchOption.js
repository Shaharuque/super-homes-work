import React from 'react';
import styled from 'styled-components';
import { Option,OptionStyle } from './SearchOption.styled';
import { memberSearchOptions } from './MemberSearch';

const SearchOption = ({picked,setPicked}) => {
    return (  
        <Option>
          {memberSearchOptions.map((option,index)=>{

            return <OptionStyle key={index} onClick={()=>setPicked(index)} selected={picked==index}>
            <p >{option.short}</p>  
          </OptionStyle>
          })}
        </Option>
    );
};

export default SearchOption;



