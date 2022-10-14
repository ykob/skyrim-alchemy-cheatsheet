import { effects as dataEffects, materials as dataMaterials } from '../data'
import { EffectItem } from './EffectItem'

type Props = {
  label: string
  effectIds: number[]
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
    <div className="grid grid-cols-4 gap-8 items-center">
      <div>{props.label}</div>
      <div className="grid grid-cols-4 col-span-3 gap-2">{effectLabels}</div>
    </div>
  )
}
