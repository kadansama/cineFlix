import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Container } from './components/Container'


function App() {
  return (
    <>
      <Container><Header /></Container>
      <Container><Outlet /></Container>
    </>
  )
}

export default App
