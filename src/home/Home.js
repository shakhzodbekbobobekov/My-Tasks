import './Home.css'
import RicipeList from '../components/RicipeList'
import {useFetch} from '../components/hooks/useFetch'

function Home() {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      <RicipeList data={data} />
    </div>
  )
}

export default Home