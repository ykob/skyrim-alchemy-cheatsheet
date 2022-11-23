import { Outlet } from 'react-router-dom'
import { GlobalHeader } from './components/features'

function App() {
  return (
    <div className="pt-8 pb-16 bg-slate-100">
      <GlobalHeader />
      <Outlet />
    </div>
  )
}

export default App
