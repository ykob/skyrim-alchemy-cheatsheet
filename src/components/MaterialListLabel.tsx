type Props = {
  label: string
}

export const MaterialListLabel = function (props: Props) {
  return (
    <div className="flex justify-center items-center cursor-pointer px-2 h-12 rounded bg-slate-500 text-white">
      {props.label}
    </div>
  )
}
