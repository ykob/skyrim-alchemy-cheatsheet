import { materials } from '../../data'
import { MaterialList } from '../../components/features/material-list/MaterialList'

export const PageHome = function() {
  return <div className='px-4 lg:px-8'>
    <MaterialList materials={materials} />
  </div>
}
