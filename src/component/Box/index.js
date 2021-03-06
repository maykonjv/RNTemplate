import React from 'react'
import styled from 'styled-components'



const StyledBoxDefault = styled.View`
  background-color: papayawhip;
  padding: 10px;
 
  `

const StyledBox = styled(StyledBoxDefault)`
  background-color: #2E9AFE;
  border-color: #81BEF7;
  ${props => props.style}
`

const Box = ({ children, style }) => (
  <StyledBox style={style}>
    {children}
  </StyledBox>
)

export default Box