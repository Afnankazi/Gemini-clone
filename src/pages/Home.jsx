import { useEffect } from 'react'
import Main from '../components/main'
import Sidebar from '../components/Sidebar'
import { useAuth0 } from '@auth0/auth0-react'


const Home = () => {
  const { loginWithRedirect, isAuthenticated, isLoading , user } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);
  console.log(user)
 
  if(isLoading){
    return(
      <div className=""> Loading... </div>
    )
  }
 
  if(isAuthenticated){
    return(
      <div className="grid grid-cols-[1fr_60fr]">
        <Sidebar />
        <Main userImage= {user.picture} usersub={user.sub} />
      </div>
    )
  }
 
}

export default Home
