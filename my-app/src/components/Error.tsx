import React from 'react'
import styled from 'styled-components'
import {MdError} from 'react-icons/md'
function Error() {
  return (
    <Container>
      <h2>Poxa, que pena... Tente novamente :)</h2>
      <p>Usuário não encontrado!</p>
      <MdError />
    </Container>
  )
}

export default Error

const Container = styled.div`
    background-color: rgba(10, 0, 30, 0.5);
    backdrop-filter: blur(5px);
    padding: 4rem;
    margin: 0 auto;
    text-align: center;
    
    p {
      color: #FFF;
      font-size: 40px;
    }

    h2 {
      font-weight: 300;
      color: #FFF;
      font-size: 15px;
      margin-bottom: 1.5rem;
    }
    
    svg {
      margin-top: 1.5rem;
      font-size: 50px;
      fill: #fca311;
    }
`