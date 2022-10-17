import { effects as dataEffects, materials as dataMaterials } from '../data'
import { CategoryItem } from './CategoryItem'
import { EffectItem } from './EffectItem'
import { MaterialListLabel } from './MaterialListLabel'

type Props = {
  label: string
  effectIds: number[]
  categoryId: number
}

export const MaterialListItem = function (props: Props) {
  const effectLabels = props.effectIds.map((p) => {
    const label = dataEffects.find((q) => q.id === p)

    return (
      <EffectItem
        key={`material-list-item-effect-${p}`}
        label={label ? label.name : 'undefined'}
      />
    )
  })

  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      <div className='flex flex-col items-end'>
        <MaterialListLabel label={props.label} />
        <CategoryItem categoryId={props.categoryId} />
      </div>
      <div className="grid grid-cols-4 col-span-3 gap-2">{effectLabels}</div>
    </div>
  )
}
