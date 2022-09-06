import Layout from '../components/Layout'
import '../styles/globals.css'
import UserContext from '../components/context/UserContext'
import { useState } from 'react';

 
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(false);
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
