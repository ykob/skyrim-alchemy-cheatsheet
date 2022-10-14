import { effects as dataEffects, materials as dataMaterials } from '../data'

export const MaterialList = function () {
  const materialItems = dataMaterials.map((o) => {
    const { id, name, effects } = o
    const effectLabels = effects.map((p) => {
      const label = dataEffects.find((q) => q.id === p)

      return (
        <div key={`material-list-item-effect-${id}-${p}`}>
          {label ? label.name : 'undefined'}
        </div>
      )
    })

    return (
      <div key={`material-list-item-${id}`}>
        <div>{name}</div>
        <div className="flex">{effectLabels}</div>
      </div>
    )
  })
  return <div>{materialItems}</div>
}
