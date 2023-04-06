import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react'
import styled from 'styled-components';

// Define a propriedade 'loadUser' como uma função que recebe uma string e retorna uma promessa vazia
type SearchProps = {
    loadUser: (username: string) => Promise<void>;
}

// Define um componente React chamado 'Search' que recebe a propriedade 'loadUser'
const Search = ({ loadUser }: SearchProps) => {
    // Cria um estado 'userName' que é inicializado como uma string vazia
    const [userName, setUserName] = useState("")

    // Define uma função para lidar com a tecla pressionada pelo usuário
    const handleKeyDown = (e: KeyboardEvent) => {
        // Verifica se a tecla pressionada foi a tecla 'Enter'
        if(e.key === "Enter") {
            // Chama a função 'loadUser' com o nome de usuário armazenado no estado 'userName'
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
                    onKeyDown={handleKeyDown} // Chama a função 'handleKeyDown' quando o usuário pressiona uma tecla
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
    background-color: rgba(10, 0, 30, 0.5);
    backdrop-filter: blur(5px);
    padding: 3rem 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    h2 {
        text-align: center;
        font-size: 40px;
        color: white;
    }

    p {
        color: #9da5d1;
        padding-top: 0.2rem;
        padding-bottom: 0.7rem;
        font-size: 17px;
    }
`

const UserInputSearch = styled.div`
    display: flex;

    input {
        padding: 0.8rem;
        border-radius: 3px 0 0 3px;
        border: none;
        color: #6247aa;
        outline: none;
    }
    button {
        padding: 0.8rem;
        border-radius: 0 3px 3px 0;
        border: none;
        color: #6247aa;
        outline: none;        color: #FFF;
        background-color: #6247aa;
        cursor: pointer;
    }
`