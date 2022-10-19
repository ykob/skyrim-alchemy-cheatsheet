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
    'h-20',
    'px-2',
    'md:h-12',
    'lg:flex-row',
    'lg:justify-end',
    'lg:items-center',
    'lg:gap-4',
    'lg:h-10',
  ].join(' ')

  return (
    <div className={classnames}>
      <MaterialListItemLabel label={props.label} />
      <CategoryItem categoryId={props.categoryId} />
    </div>
  )
}
