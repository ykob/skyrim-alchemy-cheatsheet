import { categories as dataCategories } from '../../data'

type Props = {
  categoryId: number
}

const categoryClassnames = (categoryId: number): string => {
  switch (categoryId) {
    case 0:
    default:
      return 'bg-neutral-500'
    case 1:
      return 'bg-amber-600'
    case 2:
      return 'bg-lime-600'
    case 3:
      return 'bg-cyan-600'
    case 4:
      return 'bg-rose-600'
  }
}

export const CategoryItem = function (props: Props) {
  const category = dataCategories.find((o) => o.id === props.categoryId)
  const classnames = [
    categoryClassnames(props.categoryId),
    'flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'rounded',
    'w-24',
    'h-5',
    'text-white',
    'text-xs',
  ].join(' ')
  const label = category ? category.name : 'undefined'

  return <div className={classnames}>{label}</div>
}
