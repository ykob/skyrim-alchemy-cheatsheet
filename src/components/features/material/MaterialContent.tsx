type Props = {
  name: string,
  effectIds: number[],
  category: number,
}

export const MaterialContent = function (props: Props) {
  return <div>{props.name}</div>
}