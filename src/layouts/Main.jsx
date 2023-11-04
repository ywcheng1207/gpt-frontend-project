import styled from 'styled-components'

const MainStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Main = ({ children }) => {
  return (
    <MainStyle>
      {children}
    </MainStyle>
  )
}

export default Main
