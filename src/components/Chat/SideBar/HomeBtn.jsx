import styled from 'styled-components'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import { Link } from 'react-router-dom'

//
const HomeBtnStyle = styled.div`
  width: 50px;
  background-color: transparent;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #343538;
  }
`

const HomeBtn = () => {
  return (
    <Link to="/home" style={{ height: '100%' }}>
      <HomeBtnStyle>
        <CottageOutlinedIcon />
      </HomeBtnStyle>
    </Link>
  )
}

export default HomeBtn
