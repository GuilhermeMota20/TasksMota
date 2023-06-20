import { HiListBullet } from 'react-icons/hi2';
import { CiGrid41 } from 'react-icons/ci';

interface SortViewsProps {
    isListInView: boolean;
    setIsListInView: (status: boolean) => void;
    // sortedBy: string;
    // setSortedBy: (option: string) => void;
};

const sortValues = [
    { value: "order-added", title: "Order added" },
    { value: "min-date", title: "Earlier first" },
    { value: "max-date", title: "Later first" },
    { value: "completed-first", title: "Completed first" },
    { value: "uncompleted-first", title: "Uncompleted first" },
];

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

            {/* <select className='py-3 px-4 ml-auto rounded-md bg-slate-100 focus:border-pink-600 outline-transparent border-2 border-transparent hover:border-pink-600 focus:outline-none transition dark:bg-darkBlue-800'>
                <option value="" disabled >Ordernar por</option>

                {sortValues.map(sortValue => (
                    <option
                        key={sortValue.value}
                        value={sortValue.value}
                        className="bg-slate-100 dark:bg-darkBlue-800"
                    >
                        {sortValue.title}
                    </option>
                ))}
            </select> */}
        </div>
    )
}