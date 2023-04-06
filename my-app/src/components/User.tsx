import { userProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import styled from 'styled-components'

const User = ({
    login,
    avatar_url,
    followers,
    following,
    location,
    bio,
    name,
    public_repos,
    }:userProps) => {

  return (
    <Container>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
        <p style={{
            marginTop: '-25px',
            borderBottom: '2px solid white', 
            paddingBottom:'10px', 
            width: '60%'}}>
            {name}
        </p>
      {location && (
      <p>
        <MdLocationPin />
        {location}
      </p>
      )}
        <p>
            {bio}
        </p>
      <UserNetworking>
        <div style={{borderRight: '2px solid gray'}}>
            <p>Repositórios:</p>
            <p><span>{public_repos}</span></p>
        </div>
        <div>
            <p>Seguidores:</p>
            <p><span>{followers}</span></p>
        </div>
        <div>
            <p>Seguidores:</p>
            <p><span>{following}</span></p>
        </div>
      </UserNetworking>
        <a href={`https://github.com/${login}`} target='_blank'>Ver no GitHub</a>
    </Container>
  )
}

export default User

const Container = styled.div`
    background-color: rgba(10, 0, 30, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    img {
        border: 4px solid #6247aa;
        border-radius: 50%;
    }

    h2 {
        color: #FFF;
        font-size: 60px;
    }

    p {
        color: #FFF;
        font-size: 20px;
    }

    svg {
        vertical-align: middle;
        fill: #4ad8c7;
        font-size: 35px;
    }

    span {
        color: #4ad8c7;
        font-size: 25px;
        font-weight: bolder;
    }

    a {
        color: #FFF;
        width: 80%;
        text-align: center;
        font-size: 20px;
        margin-top: 2rem;
        padding: 1rem;
        border-radius: 15px;
        background-color: #6247aa;
        transition: .4s;
    }

    a:hover {
        background-color: #6d23b6;
    }
`

const UserNetworking = styled.div`
    display: flex;

    div {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
    }
`