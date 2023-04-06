import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react'
import styled from 'styled-components';

type SearchProps = {
    loadUser: (username: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

  return (
    <Container>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>

      <UserInputSearch>
        <input
            type="text"
            placeholder="Digite o nome do usuário"
            onChange={(e)=>setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
            <BsSearch />
        </button>
      </UserInputSearch>
    </Container>
  )
}

export default Search;

const Container = styled.div`
    background-color: #2b3566;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    p {
        color: #9da5d1;
    }
`

const UserInputSearch = styled.div`
    display: flex;

    input,
    button {
        padding: 0.6rem;
        border-radius: 3px;
        border: none;
        color: #2b3566;
        outline: none;
    }

    button {
        color: #FFF;
        background-color: #0e1129;
        cursor: pointer;
    }
`