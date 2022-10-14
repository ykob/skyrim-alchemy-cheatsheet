type Props = {
  label: string
}

export const EffectItem = function (props: Props) {
  return (
    <div className="flex justify-center items-center cursor-pointer px-2 h-12 rounded bg-slate-200">
      {props.label}
    </div>
  )
}
