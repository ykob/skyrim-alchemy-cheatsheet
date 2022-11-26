import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const BoxButton = function (props: Props) {
  const className = [
    props.className,
    'cursor-pointer',
    'rounded',
    'bg-white',
    'drop-shadow-sm',
    'transition-colors',
    'active:bg-emerald-400',
    'hover:bg-emerald-300',
  ].join(' ')

  return <div className={className}>{props.children}</div>
}
