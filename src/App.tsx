import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="px-4 pt-8 pb-16 bg-slate-100 lg:px-8">
      <div className="flex mb-8">
        <h1 className="text-2xl">Skyrim Archemy Cheatsheet</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default App
