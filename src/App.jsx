import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'

function App () {
  return (
    <div className="App" style={{ height: '100%' }}>
      <HashRouter>
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route path="/chat" Component={ChatPage} />
          <Route path="*" Component={HomePage} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
