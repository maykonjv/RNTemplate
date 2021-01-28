import React from 'react'
import styled from 'styled-components'



const StyledBoxDefault = styled.View`
  background-color: papayawhip;
  margin: 10px;
 
  `

const StyledBox = styled(StyledBoxDefault)`
  background-color: green;
  ${props => props.style}
`

const Box = ({ children, style }) => (
  <StyledBox style={style}>
    {children}
  </StyledBox>
)

export default Box