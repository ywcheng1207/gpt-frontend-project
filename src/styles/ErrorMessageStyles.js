import styled from 'styled-components'

const ErrorMessageStyle = styled.div`
  color: tomato;
  text-shadow:
    1px 1px 2px red,
    0 0 0.2em tomato,
    0 0 0.05em tomato;
  border-radius: 10px;
  opacity: 0.7;
  font-size: 15px;
  font-weight: 900;
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export { ErrorMessageStyle }
