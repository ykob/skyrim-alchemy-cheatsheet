import { Link, useLocation } from 'react-router-dom'

export const BackButton = function () {
  const location = useLocation()

  if (location.pathname !== '/') {
    return (
      <Link to="/">
        <button>Back</button>
      </Link>
    )
  }
}
