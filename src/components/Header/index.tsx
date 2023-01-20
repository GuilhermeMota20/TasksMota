import MenuUser from '../MenuUser';
import Sidebar from '../Sidebar';
import AddNewTask from '../Utilities/AddNewTask';
import BrandMarkApp from './BrandMarkApp';
import SearchTasks from './SearchTasks';

export default function Header() {
    return (
        <header className='items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex'>
            <Sidebar />

            <SearchTasks />
            <BrandMarkApp />

            <div className='flex flex-1 justify-end'>
                <AddNewTask />
                <MenuUser />
            </div>
        </header>
    )
}