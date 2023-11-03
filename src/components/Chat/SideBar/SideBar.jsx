import styled from 'styled-components'
import Head from './Head'
import History from './History'
import Setting from './Setting'
import { useState } from 'react'
import ToggleBtn from './ToggleBtn'

//
const SideBarStyle = styled.section`
  flex: 0.2;
  min-width: 300px;
  height: 100%;
  color: #dddde4;
  background-color: #202123;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 992px) {
    display: none;
  }
`
const BtnContainer = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`

const SideBar = () => {
  const [sideBarToggle, setSideBarToggle] = useState(true)
  const handleSideBarToggle = () => {
    setSideBarToggle(!sideBarToggle)
  }

  return (
    <>
      {sideBarToggle ? (
        <SideBarStyle>
          <Head onSideBarToggle={handleSideBarToggle} />
          <History />
          <Setting />
        </SideBarStyle>
      ) : (
        <BtnContainer>
          <ToggleBtn onSideBarToggle={handleSideBarToggle} />
        </BtnContainer>
      )}
    </>
  )
}

export default SideBar
