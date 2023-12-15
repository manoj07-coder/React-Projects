import React,{useState} from 'react'
import data from './data'
import Question from './Question'

import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const App = () => {
  const [questions, setQuestions] = useState(data)

  const handleShow =  (id) =>{
    const showIndex = data.filter((data)=>data.id === id)
    
  }

  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
      <section className='info'>
        {
          questions.map((question)=>{
            return (
              <Question key={question.id} {...question}/>
            )
          })
        }
      </section>
      </div>
      
    </main>
  )
}

export default App

library.add(fab,fas,far)