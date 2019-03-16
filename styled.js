import styled from '@emotion/styled'

const Button = styled.button`
  background: ${props => (!props.bg ? 'blue' : props.bg)};
  font-size: 16px;
  padding: 10px;
  border: ${props => (!props.border ? '3px solid purple' : props.border)};
  border-radius: ${props => (!props.bRadius ? '5px' : props.bRadius)};
  color: ${props => (!props.textColor ? '#fff' : props.textColor)};
`

export { Button }
