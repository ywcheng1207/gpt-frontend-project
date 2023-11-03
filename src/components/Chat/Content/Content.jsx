//
import styled from 'styled-components'
import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

//
import AboveSection from './AboveSection'
import ButtomSection from './ButtomSection'

//
import { selectLog } from '@/store/slices/logSlice'

//
const ContentStyle = styled.section`
  background-color: #353641;
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    &:hover {
      background: #ececfe;
    }
  }
  @media (max-width: 992px) {
    padding-top: 70px;
  }
`
const AboveSectionContainer = styled.div`
  flex: 1;
`
const ButtomSectionContainer = styled.div`
  flex: 0.1;
  position: sticky;
  bottom: 0;
`

const Content = () => {
  const myElementRef = useRef(null)
  const logState = useSelector(selectLog)

  useEffect(() => {
    myElementRef.current.scrollTo(0, myElementRef.current.scrollHeight)
  }, [logState.chatList])

  return (
    <ContentStyle ref={myElementRef}>
      <AboveSectionContainer>
        <AboveSection />
      </AboveSectionContainer>
      <ButtomSectionContainer>
        <ButtomSection />
      </ButtomSectionContainer>
    </ContentStyle>
  )
}

export default Content
