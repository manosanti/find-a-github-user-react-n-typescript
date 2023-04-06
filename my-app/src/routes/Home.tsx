import { userProps } from '../types/user'
import Search from '../components/Search'
import { useState } from 'react'

const Home = () => {
    const [user, setUser] = useState<userProps | null>(null)

    const loadUser = async(userName: string) => {

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        const {avatar_url, login, location, followers, following} = data
        
        const userData: userProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }

        setUser(userData)

    }

  return (
    <div>
      <h1>Home</h1>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
    </div>
  )
}

export default Home
