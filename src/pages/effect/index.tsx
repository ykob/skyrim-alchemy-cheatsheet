import { useParams } from 'react-router-dom'
import {
  effects as dataEffects,
  materials as dataMaterials,
} from '../../data'
import { EffectContent, MaterialList } from '../../components/features'

export const PageEffect = function () {
  const { id } = useParams()
  const data =
    typeof id === 'string'
      ? dataEffects.find((o) => o.id === parseInt(id))
      : undefined

  if (!data) {
    return <div>This material is not found.</div>
  }

  const materials = dataMaterials.filter((o) => {
    return o.effectIds.indexOf(data.id) >= 0
  })

  return (
    <>
      <EffectContent className="mb-8 px-4 lg:px-8" name={data.name} />
      <div className="px-4 lg:px-8">
        <MaterialList
          materials={materials}
          parentEffectIds={[data.id]}
        />
      </div>
    </>
  )
}
