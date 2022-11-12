import { Link } from 'react-router-dom'
import { BoxButton } from '../../ui-parts/button/BoxButton'
import { CategoryItem } from '../../ui-parts/badge/CategoryBadge'
import { MaterialListItemLabel } from './MaterialListItemLabel'

type Props = {
  categoryId: number
  itemId: number
  label: string,
}

export const MaterialListItemHead = function (props: Props) {
  const classnames = [
    'flex',
    'flex-col',
    'justify-center',
    'items-end',
    'gap-2',
    'h-20',
    'px-2',
    'md:h-16',
    'lg:flex-row',
    'lg:justify-end',
    'lg:items-center',
    'lg:gap-4',
    'lg:px-4',
  ].join(' ')

  return (
    <Link
      to={`/item/${props.itemId}`}
    >
      <BoxButton classnames={classnames}>
        <MaterialListItemLabel label={props.label} />
        <CategoryItem categoryId={props.categoryId} />
      </BoxButton>
    </Link>
  )
}
