type Props = {
  label: string
}

export const MaterialListItemLabel = function (props: Props) {
  return (
    <div className="leading-4 text-right text-sm lg:text-base">
      {props.label}
    </div>
  )
}
