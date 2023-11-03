//
import styled from 'styled-components'

//
import Preloader from './Preloader'
import TextBlock from './TextBlock'
import LoginBlock from './LoginBlock'
import { Logostyle } from './Logo'

//
const HomeContentContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  .home-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .info-block,
    .login-block {
      display: flex;
      justify-content: center;
      /* align-items: center; */
    }
    .info-block {
      height: 50%;
      width: 100%;
      background-color: #33343b;
      position: relative;
      display: flex;
    }
    .login-block {
      height: 50%;
      width: 100%;
      background-color: #393b46;
      position: relative;
    }
  }
  @media (min-width: 991px) {
    .home-content {
      flex-direction: row;
      .info-block {
        height: 100%;
        width: 50%;
      }
      .login-block {
        height: 100%;
        width: 50%;
        align-items: center;
      }
    }
  }
`

const HomeContent = () => {
  return (
    <HomeContentContainerStyle>
      <Preloader />
      <div className="home-content">
        <div className="info-block">
          <Logostyle />
          <TextBlock />
        </div>
        <div className="login-block">
          <LoginBlock />
        </div>
      </div>
    </HomeContentContainerStyle>
  )
}

export default HomeContent
