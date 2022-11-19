import { useParams } from 'react-router-dom'
import { materials as dataMaterials } from '../../data'
import { MaterialContent } from '../../components/features/material-content/MaterialContent'
import { MaterialList } from '../../components/features/material-list/MaterialList'
import { StickyBar } from '../../components/ui-parts'

export const PageMaterial = function () {
  const { id } = useParams()
  const data =
    typeof id === 'string'
      ? dataMaterials.find((o) => o.id === parseInt(id))
      : undefined

  if (!data) {
    return <div>This material is not found.</div>
  }

  const thisMaterial = dataMaterials.find((o) => o.id === data.id)
  const materials = dataMaterials.filter((o) => {
    return (
      o.effectIds.filter((p) => data.effectIds.indexOf(p) > -1).length > 0 &&
      o.id !== data.id
    )
  })

  return (
    <>
      <MaterialContent
        className="mb-8 px-4 lg:px-8"
        name={data.name}
        effectIds={data.effectIds}
        category={data.category}
      />
      <StickyBar className="mb-4">
        <MaterialList materials={[thisMaterial!]} />
      </StickyBar>
      <div className="px-4 lg:px-8">
        <MaterialList materials={materials} />
      </div>
    </>
  )
}
