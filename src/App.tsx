import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="pt-8 pb-16 bg-slate-100">
      <div className="flex mb-8 px-4 lg:px-8">
        <h1 className="md:text-lg lg:text-xl">Skyrim Archemy Cheatsheet</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default App
