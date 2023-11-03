import styled, { css } from 'styled-components'

const ButtonStyle = styled.button`
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  ${(props) =>
    (props.type === 'newChat' &&
      css`
        border: solid 1px rgba(255, 255, 255, 0.2);
        padding: 10px;
        color: #ececf1;
        font-size: 0.9rem;
        display: flex;
        gap: 1rem;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        &:hover {
          background-color: #343538;
        }
      `) ||
    (props.type === 'clear-all' &&
      css`
        background-color: #991b1b;
        color: #d6d0d0;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: 900;
        &:hover {
          opacity: 0.9;
        }
      `)}
`

const SendButtonStyle = styled(ButtonStyle).attrs({
  className: 'SendButtonStyle'
})`
  cursor: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  //
  height: 30px;
  width: 30px;
  border: none;
  // 區分是否正在打字
  ${(props) =>
    props.type === 'typing' &&
    css`
      background-color: #19c37d;
      cursor: pointer;
      &:hover {
        background-color: #1ad6a1;
      }
    `}
`

export { ButtonStyle, SendButtonStyle }
