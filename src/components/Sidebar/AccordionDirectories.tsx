import { AiOutlineBranches } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';

interface PropsAccordion {
    title: string;
    children: any;
    index: number;
    activeIndex: number;
    setActiveIndex: any;
}

export default function AccordionDirectories({ title, children, index, activeIndex, setActiveIndex }: PropsAccordion) {
    const handleSetIndex = (index: number) =>
        activeIndex !== index
            ? setActiveIndex(index)
            : setActiveIndex();

    return (
        <div className='flex flex-col px-4 rounded-sm'>
            <div onClick={() => handleSetIndex(index)} className='flex justify-between items-center cursor-pointer'>
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
                <div className="shadow-3xl shadow-cyan-500/50 p-4">
                    {children}
                </div>
            )}
        </div>
    );
};