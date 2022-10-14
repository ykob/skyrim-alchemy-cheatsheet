import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className='text-2xl'>Skyrim Archemy Cheatsheet</h1>
      <Outlet />
    </div>
  )
}

export default App
