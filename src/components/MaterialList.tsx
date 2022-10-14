import { materials as dataMaterials } from '../data'
import { MaterialListItem } from './MaterialListItem'

export const MaterialList = function () {
  const materialItems = dataMaterials.map((o) => {
    const { id, name, effectIds } = o

    return (
      <MaterialListItem
        key={`material-list-item-${id}`}
        label={name}
        effectIds={effectIds}
      />
    )
  })
  return <div className='grid grid-cols-1 gap-6'>{materialItems}</div>
}
