
import { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  useEffect(()=>{
    axios.get('/data.json')
    .then
  },[])
  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card />
      </div>
    </main>
  )
}

export default Home
