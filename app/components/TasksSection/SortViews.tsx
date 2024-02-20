import { HiListBullet } from 'react-icons/hi2';
import { CiGrid41 } from 'react-icons/ci';
import { useFormatListInView } from '../../services/hooks/useFormatListInView';

export default function SortViews() {
  const { isListInView, toggleListInView } = useFormatListInView();

  return (
    <div className='flex gap-4 items-center'>
      <button
        onClick={() => toggleListInView()}
        title="Visualizar em mode galeria"
      >
        <CiGrid41 className={`text-2xl ${!isListInView ? 'text-pink-600' : ''}`} />
      </button>
      <button
        onClick={() => toggleListInView()}
        title="Visualizar em modo de lista"
      >
        <HiListBullet className={`text-2xl ${isListInView ? 'text-pink-600' : ''}`} />
      </button>
    </div>
  )
}