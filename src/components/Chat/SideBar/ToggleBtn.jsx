import styled from 'styled-components'
import MultipleStopRoundedIcon from '@mui/icons-material/MultipleStopRounded'

//
const ToggleStyle = styled.div`
  height: 30px;
  width: 50px;
  background-color: #202123;
  color: #fff;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #343538;
  }
`

const ToggleBtn = ({ onSideBarToggle }) => {
  return (
    <ToggleStyle onClick={onSideBarToggle}>
      <MultipleStopRoundedIcon />
    </ToggleStyle>
  )
}

export default ToggleBtn
