type Props = {
  label: string
}

export const MaterialListLabel = function (props: Props) {
  return (
    <div className="flex justify-center items-center cursor-pointer h-12 rounded ">
      {props.label}
    </div>
  )
}
