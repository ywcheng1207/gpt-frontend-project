//
import styled from 'styled-components'
import { ButtonStyle } from '@/styles/ButtonStyles'
import { useDispatch, useSelector } from 'react-redux'

//
import { handleAddNewChat, selectLog } from '@/store/slices/logSlice'

//
import ToggleBtn from './ToggleBtn'
import ColorBadge from './Badge'

//
const HeadStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-top: 10px;
  padding: 0 10px;
  gap: 5px;
  .btn {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .toggle {
    height: 30px;
    width: 50px;
    border: solid 1px rgba(255, 255, 255, 0.2);
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #343538;
    }
  }
`

const Head = ({ onSideBarToggle }) => {
  const logState = useSelector(selectLog)
  const dispatch = useDispatch()

  return (
    <HeadStyle>
      <div
        className="btn"
        onClick={() => {
          dispatch(handleAddNewChat())
        }}
      >
        <ButtonStyle type="newChat">
          <span>{`+  New chat`}</span>
          <ColorBadge chatLogNumber={logState.chatList.length} />
        </ButtonStyle>
      </div>
      <ToggleBtn onSideBarToggle={onSideBarToggle} />
    </HeadStyle>
  )
}

export default Head
