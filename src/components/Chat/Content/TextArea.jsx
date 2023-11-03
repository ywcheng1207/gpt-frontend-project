//
import * as React from 'react'
import styled from 'styled-components'

//
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'

//
import { SendButtonStyle } from '@/styles/ButtonStyles'
import { ErrorMessageStyle } from '@/styles/ErrorMessageStyles'

//
const TextAreaStyle = styled.div`
  position: relative;
  width: 50vw;
  textarea {
    width: 100%;
    min-height: 20px;
    max-height: 20vh;
    background: #4e4f62;
    color: white;
    resize: none;
    border-radius: 12px;
    border: none;
    padding: 12px 50px 10px 12px;
    &:focus {
      outline: none;
    }
    &:focus-visible {
      outline: 0;
    }
  }
  @media (max-width: 992px) {
    width: 90vw;
  }
  #icon-container {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 50px;
    padding: 0 10px 0 15px;
    background-color: #4e4f62;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 10px 10px 0;
  }
`

const TextArea = ({ chatMessage, chatInputError, onSendMessage, onType }) => {
  return (
    <>
      <TextAreaStyle>
        <BaseTextareaAutosize
          placeholder="發送訊息"
          value={chatMessage}
          onChange={(event) => onType(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
            }
            if (event.key === 'Enter') {
              onSendMessage()
            }
          }}
        />
        <div id="icon-container">
          {chatMessage ? (
            <SendButtonStyle type="typing" onClick={onSendMessage}>
              <SendRoundedIcon style={{ color: '#fff', fontSize: '18px' }} />
            </SendButtonStyle>
          ) : (
            <SendButtonStyle>
              <SendRoundedIcon style={{ color: '#a7aacc', fontSize: '18px' }} />
            </SendButtonStyle>
          )}
        </div>
      </TextAreaStyle>
      <ErrorMessageStyle>
        {chatInputError ? (
          <>
            <ReportTwoToneIcon />
            {chatInputError}
          </>
        ) : (
          ''
        )}
      </ErrorMessageStyle>
    </>
  )
}

export default TextArea
