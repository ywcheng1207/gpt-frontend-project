//
import styled from 'styled-components'

//
import medium from '@/assets/medium.svg'
import github from '@/assets/github.svg'
import person from '@/assets/person.svg'

//
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  width: 70%;
  color: #fff;
  h1 {
    font-size: 30px;
    line-height: 30px;
    font-family: 'Bebas Neue';
  }
  h6 {
    font-size: 15px;
    line-height: 20px;
  }
  .icon-container {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    cursor: pointer;
    .icon-github,
    .icon-medium,
    .icon-person {
      height: 30px;
      width: 30px;
    }
    .icon-medium {
      background: url(${medium});
    }
    .icon-github {
      background: url(${github});
    }
    .icon-person {
      background: url(${person});
    }
  }
  @media (min-width: 991px) {
    margin-top: 0;
    h1 {
      font-size: 38px;
      line-height: 45px;
    }
    h6 {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media (max-width: 375px) {
    gap: 0;
    h1 {
      font-size: 20px;
      line-height: 38px;
    }
    h6 {
      font-size: 15px;
      line-height: 20px;
    }
  }
  @media (max-height: 414px) {
    margin-top: 0;
    margin-left: 130px;
    gap: 0;
    h1 {
      font-size: 20px;
      line-height: 38px;
    }
    h6 {
      font-size: 15px;
      line-height: 20px;
    }
  }
`

const TextBlock = () => {
  return (
    <TextContainer>
      <h1>{' Welcome! I am YWJ.'}</h1>
      <h1>{'This is my side project. '}</h1>
      <h6>
        {`Feel free to explore my
            work, and if you have any questions or suggestions, please don't
            hesitate to contact me.`}
      </h6>
      <div className="icon-container">
        <a
          target="_blank"
          href="https://medium.com/@ywcheng1207"
          className="icon-medium"
          rel="noreferrer"
          title="medium"
        ></a>
        <a
          target="_blank"
          href="https://github.com/ywcheng1207"
          className="icon-github"
          rel="noreferrer"
          title="github"
        ></a>
        <a
          target="_blank"
          href="https://www.cakeresume.com/dashboard"
          className="icon-person"
          rel="noreferrer"
          title="profile"
        ></a>
      </div>
    </TextContainer>
  )
}

export default TextBlock
