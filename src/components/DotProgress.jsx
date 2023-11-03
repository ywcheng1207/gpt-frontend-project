import styled from 'styled-components'

const DotProgressStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.$fz}px;
  font-weight: 700;
  color: #5f6077;
  width: 100%;
  min-height: 30px;
  @keyframes dots {
    0% {
      content: '';
    }
    25% {
      content: '.';
    }
    50% {
      content: '..';
    }
    75% {
      content: '...';
    }
  }
  .dotdot {
    &::after {
      content: '...';
      animation: dots 1s infinite;
    }
  }
`

const DotProgress = ({ text, fz }) => {
  return (
    <DotProgressStyle $fz={fz}>
      <span>{text}</span>
      <span className="dotdot"></span>
    </DotProgressStyle>
  )
}

export default DotProgress
