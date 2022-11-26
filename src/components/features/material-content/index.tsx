import { CategoryBadge } from '../../ui-parts'

type Props = {
  name: string
  category: number
  className: string
}

export const MaterialContent = function (props: Props) {
  return (
    <div className={props.className}>
      <h1 className="mb-2 text-2xl md:mb-4 md:text-3xl lg:text-4xl">素材：{props.name}</h1>
      <CategoryBadge categoryId={props.category} />
    </div>
  )
}
