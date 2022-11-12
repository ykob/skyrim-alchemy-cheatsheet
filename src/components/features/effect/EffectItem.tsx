import { BoxButton } from '../../ui-parts/button/BoxButton'

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
    'px-2',
    'rounded',
    'leading-4',
    'bg-white',
    'drop-shadow-sm',
  ].join(' ')

  return <BoxButton classnames={classnames}>{props.label}</BoxButton>
}
