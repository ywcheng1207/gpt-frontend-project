import styled from 'styled-components'
import AddNewChatBtn from './AddNewChatBtn'
import SideBarModalContent from './SideBarModal'

//
const BurgerModalStyle = styled.div`
  background-color: #2e2f38;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 70px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn-container {
    height: 100%;
    display: flex;
  }
  @media (min-width: 992px) {
    display: none;
  }
`

const BurgerModal = () => {
  return (
    <BurgerModalStyle>
      <SideBarModalContent />
      <div style={{ color: '#fff' }}>YWJ</div>
      <div className="btn-container">
        {/* <HomeBtn /> */}
        <AddNewChatBtn />
      </div>
    </BurgerModalStyle>
  )
}

export default BurgerModal
