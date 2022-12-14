import { Link } from 'react-router-dom'
import { BoxButton, CategoryBadge } from '../../ui-parts'
import { MaterialListItemLabel } from './MaterialListItemLabel'

type Props = {
  categoryId: number
  itemId: number
  label: string,
}

export const MaterialListItemHead = function (props: Props) {
  const className = [
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
      to={`/material/${props.itemId}`}
    >
      <BoxButton className={className}>
        <MaterialListItemLabel label={props.label} />
        <CategoryBadge categoryId={props.categoryId} />
      </BoxButton>
    </Link>
  )
}
