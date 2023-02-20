import React from 'react'
import styled  from 'styled-components'

// border-radius: 10px;
//     border: none;

//     padding: 5px;
//     width: 100px;
//     height: 35px;

//     font-weight: bold;
// border: none;
// border-radius: 10px;
// background-color: black;

// padding: 10px;

// font-size: 18px;
// font-weight: bold;
// color: white;
const StyledButton = styled.button`
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    padding: ${(props) => props.padding + 'px'};
    background-color: black;
    color: ${(props) => props.color};
    border: none;
    border-radius: 10px;
    font-weight: bold;
    margin-right: 10px;
    

`


function Button({width, height, padding, color, desc, add }) {
  return (
    <StyledButton
        width={width}
        height={height}
        padding={padding}
        
        color={color}
    >
      {desc}
    </StyledButton>
  )
}

export default Button