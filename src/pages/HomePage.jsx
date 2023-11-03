import styled from 'styled-components'
import Main from '@/layouts/Main'
import HomeContent from '@/components/Home/HomeContent'

//
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//
const HomePageContainerStyle = styled.div`
  width: 100vw;
  height: 100vh;
`

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (Cookies.get('TK')) {
      navigate('/chat')
    }
  }, [])

  return (
    <Main>
      <HomePageContainerStyle>
        <HomeContent />
      </HomePageContainerStyle>
    </Main>
  )
}

export default HomePage
