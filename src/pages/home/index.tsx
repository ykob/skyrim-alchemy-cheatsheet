import { materials } from '../../data'
import { MaterialList } from '../../components/features/material-list'

export const PageHome = function() {
  return <div className='px-4 lg:px-8'>
    <p className='mb-8 font-normal'>
      The Elder Scrolls V: Skyrim® の錬金術に使用する素材と効果の一覧表です。<br />
      素材名や効果名をタップすることで一覧をフィルタリングできます。
    </p>
    <MaterialList materials={materials} />
  </div>
}
