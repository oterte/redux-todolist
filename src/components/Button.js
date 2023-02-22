import React from 'react'
import styled  from 'styled-components'


const StyledButton = styled.button`
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    padding: ${(props) => props.padding + 'px'};
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    border: 1px solid black;
    border-radius: 10px;
    font-weight: bold;
    margin-right: 10px;
    &:hover{
      cursor: pointer;
    }
    &:active{
      background-color: grey;
    }

`


function Button({width, height, padding, color, desc, handler,bgColor, type }) {
  
  return (
    <StyledButton
        width={width}
        height={height}
        padding={padding}
        onClick={handler}
        bgColor={bgColor}
        color={color}
        type={type}
    >
      {desc}
    </StyledButton>
  )
}

export default Button