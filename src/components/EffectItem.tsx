type Props = {
  label: string
}

export const EffectItem = function (props: Props) {
  return (
    <div className="flex justify-center items-center cursor-pointer h-10 rounded bg-slate-200">
      {props.label}
    </div>
  )
}
