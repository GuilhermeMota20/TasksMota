import AddNewTask from '../Utilities/AddNewTask';
import SearchTasks from './SearchTasks';
import BrandMarkApp from './BrandMarkApp';

export default function Header() {
    return (
        <header className='flex justify-between items-center relative'>
            <SearchTasks />
            <BrandMarkApp />
            <AddNewTask />
        </header>
    )
}