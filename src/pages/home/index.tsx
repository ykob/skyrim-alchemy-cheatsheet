import { materials } from '../../data'
import { MaterialList } from '../../components/features/material-list/MaterialList'

export const PageHome = function() {
  return <div>
    <MaterialList materials={materials} />
  </div>
}
