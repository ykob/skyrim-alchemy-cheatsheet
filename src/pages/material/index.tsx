import { useParams } from 'react-router-dom'
import { materials as dataMaterials } from '../../data'
import { MaterialContent } from '../../components/features/material-content/MaterialContent'
import { MaterialList } from '../../components/features/material-list/MaterialList'

export const PageMaterial = function () {
  const { id } = useParams()
  const data =
    typeof id === 'string'
      ? dataMaterials.find((o) => o.id === parseInt(id))
      : undefined

  if (!data) {
    return <div>This material is not found.</div>
  }

  const materials = dataMaterials.filter((o) => {
    return o.effectIds.filter((p) => data.effectIds.indexOf(p) > -1).length > 0
  })

  return (
    <>
      <MaterialContent
        className="mb-8"
        name={data.name}
        effectIds={data.effectIds}
        category={data.category}
      />
      <MaterialList materials={materials} />
    </>
  )
}
