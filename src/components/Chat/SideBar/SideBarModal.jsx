import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

//
import styled from 'styled-components'

//
import History from './History'
import Setting from './Setting'

//
const SideBarModalContentContainer = styled.div`
  .icon-container {
    border: none;
    width: 70px;
    padding: 20px;
    cursor: pointer;
    &:hover {
      background-color: #343538;
    }
  }
`

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  .the-rest {
    background-color: transparent;
    flex: 1;
  }
`

const SideBarModalContentStyle = styled.div`
  width: 40vw;
  max-width: 300px;
  height: 100vh;
  background-color: #202123;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CloseModalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .icon-container {
    cursor: pointer;
    &:hover {
      background-color: #343538;
    }
  }
`

export default function SideBarModalContent() {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <SideBarModalContentContainer>
      <div className="icon-container" onClick={handleOpen}>
        <LunchDiningOutlinedIcon style={{ color: '#fff' }} />
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <BackDrop>
          <SideBarModalContentStyle>
            <CloseModalContainer>
              <div className="icon-container" onClick={handleClose}>
                <CloseOutlinedIcon />
              </div>
            </CloseModalContainer>
            <History />
            <Setting />
          </SideBarModalContentStyle>
          <div className="the-rest" onClick={handleClose}></div>
        </BackDrop>
      </Backdrop>
    </SideBarModalContentContainer>
  )
}
