import React from 'react'
import styled  from 'styled-components'


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


function Button({width, height, padding, color, desc, handler }) {
  
  return (
    <StyledButton
        width={width}
        height={height}
        padding={padding}
        onClick={handler}
        
        color={color}
    >
      {desc}
    </StyledButton>
  )
}

export default Button