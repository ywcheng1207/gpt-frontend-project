import styled from 'styled-components'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { useDispatch } from 'react-redux'

//
import { handleAddNewChat } from '@/store/slices/logSlice'

//
const AddNewChatBtnStyle = styled.div`
  width: 50px;
  background-color: transparent;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #343538;
  }
`

const AddNewChatBtn = () => {
  const dispatch = useDispatch()

  return (
    <AddNewChatBtnStyle
      onClick={() => {
        dispatch(handleAddNewChat())
      }}
    >
      <AddCircleOutlineOutlinedIcon />
    </AddNewChatBtnStyle>
  )
}

export default AddNewChatBtn
