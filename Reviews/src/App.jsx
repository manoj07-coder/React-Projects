import React from 'react'
import Reviews from './Reviews'

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Reviews />
      </section>
    </main>
  )
}

export default App