import { Outlet } from 'react-router-dom'
import { GlobalHeader, ScrollToTop } from './components/features'

function App() {
  return (
    <div className="pt-4 pb-16 bg-slate-100 lg:pt-8">
      <ScrollToTop />
      <GlobalHeader />
      <Outlet />
    </div>
  )
}

export default App
