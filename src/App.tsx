import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="text-2xl">Skyrim Archemy Cheatsheet</h1>
      <div className="px-8 py-12">
        <Outlet />
      </div>
    </div>
  )
}

export default App
