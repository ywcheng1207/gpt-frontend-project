import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import Cookies from 'js-cookie'

//
import { useDispatch } from 'react-redux'
import { handleClearAllChat } from '@/store/slices/logSlice'
import { useDeleteAllChatMutation } from '@/store/apiSlices/apiSlice'

//
const SettingStyle = styled.div`
  border-top: solid 1px rgba(255, 255, 255, 0.2);
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .modal {
    width: 95%;
    position: absolute;
    top: -180%;
    left: 2.5%;
    background-color: #111113;
    border-radius: 10px;
  }
  .clear,
  .logout {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    letter-spacing: 3px;
    font-weight: 900;
    &:hover {
      background-color: #343541;
    }
  }
  .clear {
    border-radius: 10px 10px 0 0;
  }
  .logout {
    border-top: solid 1px rgba(255, 255, 255, 0.2);
    border-radius: 0 0 10px 10px;
  }
`
const SettingContainer = styled.div`
  margin: 0 2.5%;
  border-radius: 10px;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  &:hover {
    background-color: #25282b;
  }
`

const Setting = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [deleteAllChat, { error, isLoading }] = useDeleteAllChatMutation()

  const handleClearAllChatLogs = async () => {
    try {
      await deleteAllChat(Cookies.get('TK'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SettingStyle onClick={() => setToggle(!toggle)}>
      <SettingContainer>
        YWJ
        <MoreVertRoundedIcon />
        {toggle && (
          <div className="modal">
            <div
              className="clear"
              onClick={() => {
                dispatch(handleClearAllChat())
                handleClearAllChatLogs()
              }}
            >
              清空紀錄
            </div>
            <div
              className="logout"
              onClick={() => {
                Cookies.remove('TK')
                localStorage.clear()
                navigate('/home')
              }}
            >
              登出
            </div>
          </div>
        )}
      </SettingContainer>
    </SettingStyle>
  )
}

export default Setting
