//
import styled from 'styled-components'

//
import { SendButtonStyle } from '@/styles/ButtonStyles'
import { InputStyles } from '@/styles/InputStyles'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone'
import { ErrorMessageStyle } from '@/styles/ErrorMessageStyles'
import DotProgress from '@/components/DotProgress'

//
import WaveSvg from '@/assets/wave.svg?react'

//
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

//
import { usePostLoginMutation } from '@/store/apiSlices/apiSlice'

//
const LoginBlockContainer = styled.div`
  width: 70%;
  max-width: 300px;

  @media (max-height: 414px) {
    .wave {
      display: none;
    }
  }
`

//
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-top: 30px;
    font-size: 38px;
    line-height: 45px;
    font-family: 'Nosifer';
    color: #fff;
  }
  input {
    margin-top: 25px;
    border-radius: 4px;
  }
  .send-btn {
    align-self: flex-end;
  }
  @media (max-width: 375px) {
    h1 {
      margin-top: 10px;
      font-size: 25px;
    }
    input {
      margin-top: 15px;
      max-height: 40px;
    }
  }
  @media (max-height: 414px) {
    h1 {
      margin-top: 10px;
      font-size: 20px;
      line-height: 30px;
    }
    input {
      margin-top: 10px;
      max-height: 30px;
    }
  }
`

const LoginBlock = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMesssage] = useState('')
  const [postLogin, { error, isError, isLoading }] = usePostLoginMutation()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await postLogin({ email, password }).unwrap()

      Cookies.set('TK', res.token, { expires: 1 })

      navigate('/chat')
    } catch (error) {
      setErrorMesssage(error.data.error)
    }
  }

  let buttonUi = ''
  if (isLoading) {
    buttonUi = (
      <DotProgress text="登入中~(初次登入稍待伺服器啟動再試一次)" fz={14} />
    )
  } else if (password.trim() === '' || email.trim() === '') {
    buttonUi = (
      <SendButtonStyle className="send-btn">
        <ArrowForwardSharpIcon style={{ color: '#5e5d5d' }} />
      </SendButtonStyle>
    )
  } else {
    buttonUi = (
      <SendButtonStyle className="send-btn" type="typing" onClick={handleLogin}>
        <ArrowForwardSharpIcon style={{ color: '#fff' }} />
      </SendButtonStyle>
    )
  }

  return (
    <LoginBlockContainer>
      <LoginContainer
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleLogin()
          }
        }}
      >
        <h1>Login</h1>
        <InputStyles
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setErrorMesssage('')
          }}
        />
        <InputStyles
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setErrorMesssage('')
          }}
        />
        <ErrorMessageStyle>
          {errorMessage
            ? (
              <>
                <ReportTwoToneIcon />
                {errorMessage}
              </>
            )
            : (
              <div style={{ height: '25px' }}></div>
            )}
        </ErrorMessageStyle>
        {buttonUi}
      </LoginContainer>
      <WaveSvg
        className="wave"
        style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%'
        }}
      />
    </LoginBlockContainer>
  )
}

export default LoginBlock
