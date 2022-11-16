import { CategoryBadge } from '../../ui-parts'

type Props = {
  name: string
  effectIds: number[]
  category: number
  className: string
}

export const MaterialContent = function (props: Props) {
  return (
    <div className={props.className}>
      <div className="mb-4 text-4xl">{props.name}</div>
      <CategoryBadge categoryId={props.category} />
    </div>
  )
}
