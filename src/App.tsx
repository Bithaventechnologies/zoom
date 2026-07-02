import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InstallationGuide from './pages/InstallationGuide'
import Store from './pages/Store'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Store />} path="/store" />
        <Route element={<InstallationGuide />} path="/install-guide" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
