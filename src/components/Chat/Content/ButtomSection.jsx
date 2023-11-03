//
import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux/es/hooks/useSelector'

//
import TextArea from './TextArea'
import DotProgress from '@/components/DotProgress.jsx'

//
import { usePostSendChatMutation } from '@/store/apiSlices/apiSlice'
import { selectLog, handleSendChatLog } from '@/store/slices/logSlice'

//
const ButtomSectionStyle = styled.div`
  height: 200px;
  width: 100%;
  .input-container {
    background-image: linear-gradient(180deg, rgba(53, 55, 64, 0), #353740 60%);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ButtomSection = () => {
  const logState = useSelector(selectLog)
  const dispatch = useDispatch()
  const [chatInputError, setChatInputError] = useState(null)
  const [chatMessage, setChatMessage] = useState('')

  const [postSendChat, { error, isError, isLoading }] =
    usePostSendChatMutation()

  const handleType = (text) => {
    setChatMessage(text)
    setChatInputError(null)
  }

  const handleSendApi = async ({ theChatId, UserMessage }) => {
    try {
      setChatMessage('')
      const res = await postSendChat({
        theChatId,
        UserMessage,
        TOKEN: Cookies.get('TK')
      }).unwrap()

      const data = [{
        message: UserMessage,
        role: 'user',
        promptTokens: res.completion.usage.prompt_tokens
      }, {
        message: res.completion.choices[0].message.content,
        role: 'assistant',
        completionTokens: res.completion.usage.completion_tokens
      }]

      dispatch(handleSendChatLog(data))
    } catch (error) {
      setChatInputError(
        'Oops...不好意思，這是試用版，可能您的問題太複雜無法處理，可以試試看簡單一點的問題，例如:「1+1?」'
      )
      console.error(error)
    }
  }

  const handleSendMessage = () => {
    if (!chatMessage || chatMessage.trim().length === 0) {
      setChatInputError('請輸入訊息')
      return
    }
    handleSendApi({ theChatId: logState.currentId, UserMessage: chatMessage })
  }

  let content = (
    <TextArea
      chatMessage={chatMessage}
      onSendMessage={handleSendMessage}
      onType={handleType}
      chatInputError={chatInputError}
    />
  )

  if (isLoading) {
    content = <DotProgress text="處理中" fz="40" />
  }

  return (
    <ButtomSectionStyle>
      <div className="input-container">{content}</div>
    </ButtomSectionStyle>
  )
}

export default ButtomSection
