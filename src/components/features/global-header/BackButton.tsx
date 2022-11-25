import { Link } from 'react-router-dom'

export const BackButton =function () {
  return (
    <Link to="/">
      <button>
        Back
      </button>
    </Link>
  )
}
