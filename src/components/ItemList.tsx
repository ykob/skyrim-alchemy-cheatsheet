import { items as dataItems } from '../data/'

export const ItemList = function () {
  const items = dataItems.map((o) => {
    const { id, name } = o
    return <div key={`item-list-block-${id}`}>{name}</div>
  })
  return <div>{items}</div>
}
