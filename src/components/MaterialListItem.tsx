import { effects as dataEffects } from '../data'
import { CategoryItem } from './CategoryItem'
import { EffectItem } from './EffectItem'
import { MaterialListItemLabel } from './MaterialListItemLabel'

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
        classnames="leading-4 text-xs lg:text-sm"
      />
    )
  })

  return (
    <div className="grid grid-cols-[3fr_7fr] gap-2 items-stretch">
      <div className="flex flex-col justify-center items-end gap-2 cursor-pointer h-20 px-2 md:h-12 lg:flex-row lg:justify-end lg:items-center lg:gap-4 lg:h-10">
        <MaterialListItemLabel label={props.label} />
        <CategoryItem categoryId={props.categoryId} />
      </div>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:gap-2">{effectLabels}</div>
    </div>
  )
}
