//
import styled, { css } from 'styled-components'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'

//
import DeleteBtn from './DeleteBtn'
import DotProgress from '@/components/DotProgress'

//
import { useGetChatListMutation } from '@/store/apiSlices/apiSlice'
import {
  handleChatList,
  handleSwitchCurrentId,
  selectLog
} from '@/store/slices/logSlice'
import { useEffect } from 'react'

//
import Cookies from 'js-cookie'

//
const HistoryStyle = styled.ul`
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  height: 80%;
  overflow-y: scroll;
  gap: 5px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #312e2e;
    border-radius: 5px;
    &:hover {
      background: #575252;
    }
  }
`
const MessageStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #2b2c33;
  }
  ${(props) =>
    props.$theid === props.$chatid &&
    css`
      background-color: #40414d;
      &:hover {
        background-color: #40414d;
      }
    `}
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 80%;
    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      -webkit-line-clamp: 1;
    }
  }
`

const History = () => {
  const logState = useSelector(selectLog)
  const dispatch = useDispatch()
  const [getChatList, { error, isError, isLoading }] = useGetChatListMutation()
  useEffect(() => {
    const getChatListData = async ({ TOKEN }) => {
      try {
        const res = await getChatList(TOKEN)
        dispatch(handleChatList({ chatList: res.data }))
      } catch (error) {
        console.log(error)
      }
    }
    getChatListData({ TOKEN: Cookies.get('TK') })
  }, [])

  let content = ''
  if (isLoading) {
    return (content = <DotProgress text="loading" fz="30" />)
  }

  content = (
    <HistoryStyle>
      {logState.chatList.length > 0 &&
        logState.chatList.map((log) => {
          return (
            <MessageStyle
              key={log.chatId}
              $theid={log.chatId}
              $chatid={logState.currentId.toString()}
              onClick={() => {
                dispatch(handleSwitchCurrentId(log.chatId))
              }}
            >
              <div className="title">
                <ChatBubbleOutlineRoundedIcon />
                <span className="record">{log.message || '空白對話'}</span>
              </div>
              {log.chatId === logState.currentId && (
                <DeleteBtn deleteid={log.chatId} />
              )}
            </MessageStyle>
          )
        })}
    </HistoryStyle>
  )

  return <>{content}</>
}

export default History
