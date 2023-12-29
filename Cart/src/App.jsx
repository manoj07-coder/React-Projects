import React from 'react'
import Navbar from './Navbar'
import CardContainer from './CardContainer'
import { useGlobalContext } from './Context'

const App = () => {

  const{loading} = useGlobalContext()

  if(loading){
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <main>
      <Navbar />
      <CardContainer />
    </main>
  )
}

export default App