import React, { useState } from 'react'
import People from './data'
import List from './List'

const App = () => {

  const [people, setPeople]  = useState(People)

  return (
   <main>
    <section className='container'>
      <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      <button onClick={()=> setPeople([])}>Clear all</button>

    </section>
   </main>
  )
}

export default App