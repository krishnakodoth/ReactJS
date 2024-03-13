import './App.css'
import { Outlet } from "react-router-dom";
import Header from './components/layout/Header';


import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()


function App() {

  return (
    <div className='app-wrapper'>
      <QueryClientProvider client={queryClient}>
        <Header />      
        <Outlet />
        </QueryClientProvider>
    </div>
  )
}

export default App
