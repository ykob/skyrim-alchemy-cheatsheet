import { CategoryBadge } from '../../ui-parts'

type Props = {
  name: string
  category: number
  className: string
}

export const MaterialContent = function (props: Props) {
  return (
    <div className={props.className}>
      <div className="mb-2 text-2xl md:mb-4 md:text-3xl lg:text-4xl">{props.name}</div>
      <CategoryBadge categoryId={props.category} />
    </div>
  )
}
