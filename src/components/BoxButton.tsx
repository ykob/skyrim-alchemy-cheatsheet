import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  classnames?: string
}

export const BoxButton = function (props: Props) {
  const classnames = [
    props.classnames,
    'cursor-pointer',
    'rounded',
    'bg-white',
    'drop-shadow-sm',
    'transition-colors',
    'active:bg-emerald-300',
    'hover:bg-emerald-200',
  ].join(' ')
  return <div className={classnames}>{props.children}</div>
}
