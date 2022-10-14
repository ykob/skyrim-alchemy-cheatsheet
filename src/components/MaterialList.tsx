import { effects as dataEffects, materials as dataMaterials } from '../data'
import { MaterialListItem } from './MaterialListItem'

export const MaterialList = function () {
  const materialItems = dataMaterials.map((o) => {
    const { id, name, effects } = o
    const effectLabels = effects.map((p) => {
      const label = dataEffects.find((q) => q.id === p)

      return (
        <MaterialListItem
          key={`material-list-item-effect-${id}-${p}`}
          label={label ? label.name : 'undefined'}
        />
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
