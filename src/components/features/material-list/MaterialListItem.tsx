import { effects as dataEffects } from '../../../data'
import { EffectItem } from '../../ui-parts'
import { MaterialListItemHead } from './MaterialListItemHead'

type Props = {
  categoryId: number
  effectIds: number[]
  itemId: number
  label: string
  parentEffectIds?: number[]
}

export const MaterialListItem = function (props: Props) {
  const effectLabels = props.effectIds.map((p) => {
    const label = dataEffects.find((q) => q.id === p)
    const matchedEffectId = props.parentEffectIds
      ? props.parentEffectIds.indexOf(p)
      : undefined

    return (
      <EffectItem
        key={`material-list-item-effect-${p}`}
        label={label ? label.name : 'undefined'}
        classnames="leading-4 text-xs lg:text-sm"
        matchedEffectId={matchedEffectId}
      />
    )
  })

  return (
    <div className="grid grid-cols-[3fr_7fr] gap-2 items-stretch">
      <MaterialListItemHead
        categoryId={props.categoryId}
        itemId={props.itemId}
        label={props.label}
      />
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:gap-2">
        {effectLabels}
      </div>
    </div>
  )
}
