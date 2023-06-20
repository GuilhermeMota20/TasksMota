import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function BtnOppenSidebar() {
  return (
    <button className="block xl:hidden">
      <HiOutlineMenuAlt4 className='text-xl' />
    </button>
  )
}