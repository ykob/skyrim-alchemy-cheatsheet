import { useParams } from 'react-router-dom'
import { materials as dataMaterials } from '../../data'
import { MaterialContent } from '../../components/features/material-content/MaterialContent'

export const PageMaterial = function () {
  const { id } = useParams()
  const data =
    typeof id === 'string'
      ? dataMaterials.find((o) => o.id === parseInt(id))
      : undefined

  if (data) {
    return (
      <MaterialContent
        name={data.name}
        effectIds={data.effectIds}
        category={data.category}
      />
    )
  } else {
    return <div>This material is not found.</div>
  }
}
