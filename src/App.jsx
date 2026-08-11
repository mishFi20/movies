import { Outlet } from "react-router-dom";

import { useQuery } from '@tanstack/react-query';

import { getMovies } from './services/getMovies';

import Header from "./components/Header"
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const {isLoading, isError} = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies
  })

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="App">
      <Header/>
      <Outlet />
    </div>
  )
}

export default App
