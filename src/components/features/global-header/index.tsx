import { memo } from 'react'
import { Link } from 'react-router-dom'

export const GlobalHeader = memo(function () {
  return (
    <div className="flex justify-between mb-8 px-4 lg:px-8">
      <h1 className="md:text-lg lg:text-xl">Skyrim Archemy Cheatsheet</h1>
      <Link to="/">
        <button>
          Back
        </button>
      </Link>
    </div>
  )
})
