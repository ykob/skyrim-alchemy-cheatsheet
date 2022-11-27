type Props = {
  name: string
  className: string
}

export const EffectContent = function (props: Props) {
  return (
    <div className={props.className}>
      <h1 className="mb-2 text-2xl md:mb-4 md:text-3xl lg:text-4xl">効果：{props.name}</h1>
    </div>
  )
}
