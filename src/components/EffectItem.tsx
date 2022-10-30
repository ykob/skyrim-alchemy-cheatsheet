type Props = {
  label: string
  classnames?: string
}

export const EffectItem = function (props: Props) {
  const classnames = [
    props.classnames,
    'flex',
    'justify-center',
    'items-center',
    'cursor-pointer',
    'px-2',
    'rounded',
    'leading-4',
    'bg-white',
    'drop-shadow-sm',
  ].join(' ')

  return <div className={classnames}>{props.label}</div>
}
