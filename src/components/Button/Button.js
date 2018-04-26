import styled, { css } from 'styled-components'

const Button = styled.button`
  background: Transparent;
  color: white;

  & > a {
    color: white;
    text-decoration: none;
  }

  & > a:active {
    outline: none;
  }

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: white;
      color: black;

      & > a {
        color: black;
        text-decoration: none;
      }
    `};
`

export default Button
