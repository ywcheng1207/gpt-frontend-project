import styled from 'styled-components'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

//
import { handleDeleteChatLog } from '@/store/slices/logSlice'
import { useDeleteChatLogsMutation } from '@/store/apiSlices/apiSlice'

//
const DeleteBtnStyle = styled.div`
  width: 50px;
  background-color: transparent;
  color: #fff;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
`

const DeleteBtn = ({ deleteid }) => {
  const dispatch = useDispatch()
  const [deleteChatLogs, { error, isError, isLoading }] =
    useDeleteChatLogsMutation()

  const handleDeleteChatLogApi = async () => {
    try {
      await deleteChatLogs({
        id: deleteid,
        TOKEN: Cookies.get('TK')
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DeleteBtnStyle
      onClick={(event) => {
        event.stopPropagation()
        dispatch(handleDeleteChatLog(deleteid))
        handleDeleteChatLogApi()
      }}
    >
      <DeleteForeverRoundedIcon
        onMouseOver={(e) => {
          e.target.style.color = '#9b9594'
        }}
        onMouseOut={(e) => {
          e.target.style.color = ''
        }}
      />
    </DeleteBtnStyle>
  )
}

export default DeleteBtn
