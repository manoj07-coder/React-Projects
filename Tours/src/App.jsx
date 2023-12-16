import React , {useState,useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {

  const removeTour = (id) => {
    const newTour = tours.filter((tour)=> tour.id !== id);
    setTours(newTour)
  }

  const [loading, setLoading] = useState(true);
  const [tours, setTours]  = useState([]);

  const fetchTours = async ()=>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return (
      <main>
        <div className='title'>
        <h2 className='loading'>0 Tours</h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours= {tours} removeTour={removeTour}/>
    </main>
  )
}

export default App