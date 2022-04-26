import './search.css'

import { useLocation } from 'react-router-dom'
import RicipeList from '../components/RicipeList'
import { useFetch } from '../components/hooks/useFetch'

export default function Search() {

  const useParams = useLocation().search
  const queryString = new URLSearchParams(useParams)
  const getParams = queryString.get('q')
  const url = 'http://localhost:3000/recipes?q=' + getParams
  const { data, error, isPending } = useFetch(url)

  return (
    <div>
      <h2 className='page-title'>Recipe bor { getParams }</h2>
      {isPending && <div>Loading.......</div>}
      { error && <div>{ error }</div>}

      {data && <RicipeList data={data} />}
    </div>
  )
}
