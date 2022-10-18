import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="text-2xl">Skyrim Archemy Cheatsheet</h1>
      <div className="px-4 py-12 lg:px-8">
        <Outlet />
      </div>
    </div>
  )
}

export default App
