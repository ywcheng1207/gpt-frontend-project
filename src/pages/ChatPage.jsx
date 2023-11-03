import Main from '@/layouts/Main'
import styled from 'styled-components'
import SideBar from '@/components/Chat/SideBar/SideBar'
import Content from '@/components/Chat/Content/Content'
import BurgerModal from '@/components/Chat/SideBar/BurgerModal'

//
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//
const ChatPageContainer = styled.div`
  height: 100%;
  display: flex;
  background-color: #202123;
  position: relative;
`

const ChatPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!Cookies.get('TK')) {
      navigate('/home')
    }
  }, [])

  return (
    <Main>
      {Cookies.get('TK') && (
        <>
          <BurgerModal />
          <ChatPageContainer>
            <SideBar />
            <Content />
          </ChatPageContainer>
        </>
      )}
    </Main>
  )
}

export default ChatPage
