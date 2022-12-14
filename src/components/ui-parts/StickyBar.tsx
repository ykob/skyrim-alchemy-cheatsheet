import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const StickyBar = function (props: Props) {
  const className = [
    props.className,
    'sticky',
    'top-0',
    'left-0',
    'bg-slate-600',
    'px-4',
    'py-2',
    'z-10',
    'lg:px-8',
    'lg:py-3',
  ].join(' ')

  return <div className={className}>{props.children}</div>
}
