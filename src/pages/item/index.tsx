import { useParams } from 'react-router-dom'

export const PageItem = function () {
  const { id } = useParams()

  return <div>{id}</div>
}
