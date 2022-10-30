import { CategoryItem } from './CategoryItem'
import { MaterialListItemLabel } from './MaterialListItemLabel'

type Props = {
  label: string
  categoryId: number
}

export const MaterialListItemHead = function (props: Props) {
  const classnames = [
    'flex',
    'flex-col',
    'justify-center',
    'items-end',
    'gap-2',
    'cursor-pointer',
    'rounded',
    'h-20',
    'px-2',
    'md:h-16',
    'bg-white',
    'lg:flex-row',
    'lg:justify-end',
    'lg:items-center',
    'lg:gap-4',
    'lg:px-4',
  ].join(' ')

  return (
    <div className={classnames}>
      <MaterialListItemLabel label={props.label} />
      <CategoryItem categoryId={props.categoryId} />
    </div>
  )
}
