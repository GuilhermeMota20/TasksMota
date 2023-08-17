import { ReactNode } from 'react';
import { AiOutlineBranches } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';

interface PropsAccordion {
  title: string;
  children: ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: any;
}

export default function AccordionDirectory({ title, children, index, activeIndex, setActiveIndex }: PropsAccordion) {
  const handleSetIndex = (index: number) =>
    activeIndex !== index
      ? setActiveIndex(index)
      : setActiveIndex();

  return (
    <div className='flex flex-col px-4 rounded-sm'>
      <div onClick={() => handleSetIndex(index)} className='flex justify-between items-center cursor-pointer mb-3'>
        <div className='flex items-center gap-4'>
          <AiOutlineBranches />

          <div className='flex'>
            <div>{title}</div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <IoIosArrowUp className={`rotate-90 transition ${activeIndex === index ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {(activeIndex === index) && (
        <>
          {children}
        </>
      )}
    </div>
  );
};