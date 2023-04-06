import './App.css'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <h1>GitHub Finder</h1>
      <Outlet />
    </Container>
  )
}

export default App

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`