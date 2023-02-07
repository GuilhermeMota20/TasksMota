import Image from "next/image";
import brand from '../../assets/favicon_insta.png';

export default function BrandMarkUser() {
    return (
        <div className="flex items-center px-4 m-4 py-2 gap-4 rounded-md cursor-pointer transition hover:bg-slate-200">
            <Image src={brand} alt="Gato" width={36} height={36} className='bg-slate-600 rounded-md' />

            <div className="flex flex-col">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200">gmota</h3>
                <span className="text-xs dark:text-slate-400">Team development</span>
            </div>
        </div>
    )
}