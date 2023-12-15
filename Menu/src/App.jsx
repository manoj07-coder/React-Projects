import React,{useState} from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'

const allCategories = ['all',...new Set (data.map((item)=>item.category))]


const App = () => {

  const [categories, setCategories] = useState([])
  const [menu, setMenu] = useState(data)

  const filterCategories = (category) =>{

    if(category === 'all'){
      return setMenu(data)
    }

     const newItems = data.filter((item) => item.category===category)
     return setMenu(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={allCategories} filterItems={filterCategories} />
        <Menu menu={menu} />
      </section>
    </main>
  )
}

export default App