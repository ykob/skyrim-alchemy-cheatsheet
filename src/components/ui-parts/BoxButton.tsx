import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  circle?: boolean
}

export const BoxButton = function ({ circle = false, ...props }: Props) {
  const className = [
    props.className,
    'cursor-pointer',
    circle ? 'rounded-full' : 'rounded',
    'bg-white',
    'drop-shadow-sm',
    'transition-colors',
    'active:bg-emerald-400',
    'hover:bg-emerald-300',
  ].join(' ')

  return <div className={className}>{props.children}</div>
}
