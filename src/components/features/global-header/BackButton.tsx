import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@mdi/react'
import { mdiHome } from '@mdi/js'
import { BoxButton } from '../../ui-parts'

export const BackButton = function () {
  const location = useLocation()

  if (location.pathname !== '/') {
    return (
      <Link to="/">
        <BoxButton className="w-12 h-12 grid place-content-center" circle>
          <Icon path={mdiHome} size={1.2} />
        </BoxButton>
      </Link>
    )
  } else {
    return null
  }
}
