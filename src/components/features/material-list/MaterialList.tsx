import { Material } from '../../../models'
import { MaterialListItem } from './MaterialListItem'

type Props = {
  materials: Material[]
  parentEffectIds?: number[]
}

export const MaterialList = function (props: Props) {
  const materialItems = props.materials.map((o) => {
    const { id, name, effectIds, category } = o

    return (
      <MaterialListItem
        key={`material-list-item-${id}`}
        label={name}
        itemId={id}
        effectIds={effectIds}
        categoryId={category}
        parentEffectIds={props.parentEffectIds}
      />
    )
  })
  return <div className="grid grid-cols-1 gap-4">{materialItems}</div>
}
