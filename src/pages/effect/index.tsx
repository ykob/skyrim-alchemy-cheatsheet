import { useParams } from 'react-router-dom'
import {
  effects as dataEffects,
  effects,
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
  const allEffects = materials.map((o) => o.effectIds).flat()
  const effectCounts: { [key: string]: number } = {}

  for (var i = 0; i < allEffects.length; i++) {
    const id = allEffects[i]
    effectCounts[id] = (effectCounts[id] || 0) + 1
  }

  const overlapEffectIds = Object.entries(effectCounts)
    .filter((o) => o[1] > 1)
    .map((o) => parseInt(o[0]))

  return (
    <>
      <EffectContent className="mb-8 px-4 lg:px-8" name={data.name} />
      <div className="px-4 lg:px-8">
        <MaterialList
          materials={materials}
          overlapEffectIds={overlapEffectIds}
        />
      </div>
    </>
  )
}
