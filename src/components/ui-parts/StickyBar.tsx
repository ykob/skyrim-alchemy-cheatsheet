import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const StickyBar = function (props: Props) {
  const classnames = [
    props.className,
    'sticky',
    'top-0',
    'left-0',
    'bg-slate-600',
    'px-4',
    'py-4',
    'z-10',
    'lg:px-8',
  ].join(' ')

  return <div className={classnames}>{props.children}</div>
}
