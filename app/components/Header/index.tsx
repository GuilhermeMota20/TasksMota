import { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { useLayoutSystem } from '../../services/hooks/useLayoutSystem';
import { useListConfig } from '../Utilities/useListConfig';
import { useListLayout } from '../Utilities/useListLayout';
import { useListPages } from '../Utilities/useListPages';
import { useScreenMedia } from '../../services/hooks/useScreenMedia';
import { useScrollTop } from '../../services/hooks/useScrollTop';
import MenuUser from '../MenuUser';
import Sidebar from '../Sidebar';
import AddNewTask from '../Utilities/AddNewTask';
import Avatar from '../Utilities/Avatar';
import BrandMarkApp from '../Utilities/BrandMarkApp';
import SearchTasks from '../Utilities/SearchTasks';
import NavigationMenuPages from '../Utilities/NavigationMenuPagesUi';

export default function Header() {
  const mediaQueries = useScreenMedia();
  const { isNavHorizontal, isLayoutExpanded, onRevertNavHorizontal } = useLayoutSystem((state) => state);
  const scrolled = useScrollTop();

  const listPages = useListPages();
  const listConfigs = useListConfig();
  const listLayout = useListLayout();

  // useEffect(() => {
  //   if(mediaQueries.md) {
  //     onRevertNavHorizontal();
  //   };
  // }, [mediaQueries]);

  return (
    <>
      {!isNavHorizontal ? (
        <header className={cn(
          'items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex',
        )}>
          <Sidebar />
          <SearchTasks />
          <BrandMarkApp />

          <div className='flex flex-1 justify-end'>
            <AddNewTask className='sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 sm:shadow-transparent' />
            <MenuUser />
          </div>
        </header>
      ) : (
        <header className={cn(
          'flex items-center gap-2 justify-between p-4 fixed w-full top-0 left-0 z-10',
          isLayoutExpanded ? "" : "px-8 md:px-16 lg:px-20 xl:px-24",
          scrolled && "shadow-md backdrop-blur-md bg-slate-50/90 dark:bg-darkBlue-700/90",
        )}>
          <BrandMarkApp />
          <NavigationMenuPages
            listPages={listPages}
            listConfig={listConfigs}
            listLayout={listLayout}
          />

          <div className="flex items-center gap-2">
            <SearchTasks className={cn(isNavHorizontal ? "md:pr-0" : "")} />
            <AddNewTask />
            <Avatar />
          </div>
        </header>
      )}
    </>
  )
}