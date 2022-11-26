import { Link, useLocation } from 'react-router-dom'
import { BoxButton } from '../../ui-parts'

export const BackButton = function () {
  const location = useLocation()

  if (location.pathname !== '/') {
    return (
      <Link to="/">
        <BoxButton className='w-12 h-12 grid place-content-center' circle>Back</BoxButton>
      </Link>
    )
  } else {
    return null
  }
}
