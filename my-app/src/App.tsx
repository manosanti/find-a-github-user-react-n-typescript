import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import TypedText from './components/TypedText';

function App() {

  return (
    <Container>
      <h1><TypedText /></h1>
      <Outlet />
    </Container>
  )
}

export default App

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 70px;
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`