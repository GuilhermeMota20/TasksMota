import { HiListBullet } from 'react-icons/hi2';
import { CiGrid41 } from 'react-icons/ci';

interface SortViewsProps {
  isListInView: boolean;
  setIsListInView: (status: boolean) => void;
  sortedBy?: string;
  setSortedBy?: (option: string) => void;
};

// const sortValues = [
//   { value: "order-added", title: "Order added" },
//   { value: "min-date", title: "Earlier first" },
//   { value: "max-date", title: "Later first" },
//   { value: "completed-first", title: "Completed first" },
//   { value: "uncompleted-first", title: "Uncompleted first" },
// ];

export default function SortViews({ isListInView, setIsListInView }: SortViewsProps) {
  return (
    <div className='flex gap-4 items-center'>
      <button
        onClick={() => setIsListInView(false)}
        title="Visualizar em mode galeria"
      >
        <CiGrid41 className={`text-2xl ${!isListInView ? 'text-pink-600' : ''}`} />
      </button>
      <button
        onClick={() => setIsListInView(true)}
        title="Visualizar em modo de lista"
      >
        <HiListBullet className={`text-2xl ${isListInView ? 'text-pink-600' : ''}`} />
      </button>
    </div>
  )
}