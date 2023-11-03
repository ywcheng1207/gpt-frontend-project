//
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

//
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded'
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded'
//
import { useGetLogsMutation } from '@/store/apiSlices/apiSlice'
import { selectLog, handleGetChatLog } from '@/store/slices/logSlice'

//
import DotProgress from '@/components/DotProgress'

//
const AboveSectionStyle = styled.div`
  h1 {
    color: #343541;
    font-size: 33px;
    font-weight: 600;
    padding: 200px 0;
    flex-grow: 2;
    text-shadow: 1px 1px 2px #86878b;
    text-align: center;
  }
`

const ChatStyle = styled.div`
  color: #dfe1f7;
  padding: 30px 0 0 0;
  .innerContainer {
    display: flex;
    align-items: center;
    gap: 30px;
    max-width: 70%;
    margin: 0 auto;
    pre {
      white-space: pre-line;
      word-break: break-all;
    }
  }
`

const UserChatStyle = styled(ChatStyle)`
  background-color: #5f6072;
  padding-bottom: 30px;
  .cost {
    max-width: 70%;
    margin: 0 auto;
    font-size: 11px;
    font-weight: 700;
    color: #84848a;
    margin-top: 10px;
    text-align: end;
  }
`
const AssistChatStyle = styled(ChatStyle)`
  background-color: #353641;
  color: #d2d2d8;
  .cost {
    max-width: 70%;
    margin: 0 auto;
    font-size: 11px;
    font-weight: 700;
    color: #5f6072;
    padding: 20px 0;
    text-align: end;
  }
`
const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const AboveSection = () => {
  const dispatch = useDispatch()
  const logState = useSelector(selectLog)
  const [getLogs, { isLoading }] = useGetLogsMutation()

  useEffect(() => {
    const getLogsData = async ({ id, TOKEN }) => {
      try {
        const res = await getLogs({ id, TOKEN })
        dispatch(handleGetChatLog(res.data))
      } catch (error) {
        console.log(error)
      }
    }

    getLogsData({ id: logState.currentId, TOKEN: Cookies.get('TK') })
  }, [logState.currentId])

  //

  let content = ''
  if (isLoading) {
    return (content = (
      <LoadingContainer>
        <DotProgress text="loading" fz="40" />
      </LoadingContainer>
    ))
  }
  if (logState.chatlog.length > 0) {
    content = logState.chatlog.map((item, index) => {
      if (item.role === 'user') {
        return (
          <UserChatStyle key={index}>
            <div className="innerContainer">
              <RecordVoiceOverRoundedIcon />
              <pre>{item.message}</pre>
            </div>
            <div className="cost">{`COST (${item.promptTokens} token = $${
              (item.promptTokens * 15) / 10000000
            }) `}</div>
          </UserChatStyle>
        )
      }
      return (
        <AssistChatStyle key={index}>
          <div className="innerContainer">
            <SmartToyRoundedIcon />
            <pre>{item.message}</pre>
          </div>
          <div className="cost">{`COST (${item.completionTokens} token = $${
            (item.completionTokens * 20) / 10000000
          }) `}</div>
        </AssistChatStyle>
      )
    })
  }

  return (
    <AboveSectionStyle>{content || <h1>Made by YWJ</h1>}</AboveSectionStyle>
  )
}

export default AboveSection
