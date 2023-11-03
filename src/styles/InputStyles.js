import styled, { css } from 'styled-components'

const InputStyles = styled.input`
  border: none;
  background-color: #4e4f62;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  padding: 12px 15px;
  color: #fff;
  &::placeholder {
    color: #6f718b;
  }
  &:focus {
    outline: none;
  }
`

export { InputStyles }
