import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const NavContainer = styled.div`
  width: 100%;
  background-color: #3d3d3d;
`
const NavList = styled.ul`
  display: flex;
  gap: 30px;
  li {
    list-style: none;
    cursor: pointer;
    padding: 30px;
    &:hover {
      background-color: #4e4e4e;
    }
  }
`

const Nav = () => {
  const navigate = useNavigate()

  return (
    <NavContainer>
      <NavList>
        <li onClick={() => navigate('/home')}>Home</li>
        <li onClick={() => navigate('/chat')}>Chat</li>
        <li onClick={() => navigate('/news')}>News</li>
      </NavList>
    </NavContainer>
  )
}

export default Nav
