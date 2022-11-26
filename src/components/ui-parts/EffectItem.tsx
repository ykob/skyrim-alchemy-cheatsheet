import { BoxButton } from './'

type Props = {
  label: string
  className?: string
  matchedEffectId?: number
}

export const EffectItem = function (props: Props) {
  const classnameBgColor = () => {
    switch (props.matchedEffectId) {
      case 0:
        return 'bg-red-200'
      case 1:
        return 'bg-yellow-200'
      case 2:
        return 'bg-green-200'
      case 3:
        return 'bg-blue-200'
      case -1:
        return 'bg-gray-200 text-gray-400'
      default:
        return 'bg-white'
    }
  }
  const className = [
    props.className,
    classnameBgColor(),
    'flex',
    'justify-center',
    'items-center',
    'hover:text-black',
  ].join(' ')

  return <BoxButton className={className}>{props.label}</BoxButton>
}
