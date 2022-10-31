import { effects as dataEffects } from '../../../data'
import { EffectItem } from '../effect/EffectItem'
import { MaterialListItemHead } from './MaterialListItemHead'

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
      <MaterialListItemHead label={props.label} categoryId={props.categoryId} />
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:gap-2">
        {effectLabels}
      </div>
    </div>
  )
}
