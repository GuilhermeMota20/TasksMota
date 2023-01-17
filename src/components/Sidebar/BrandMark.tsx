import Image from "next/image";
import brand from '../../assets/favicon_insta.png';

export default function BrandMark() {
    return (
        <div className="flex items-center px-4 py-2 rounded-md gap-4 cursor-pointer transition hover:bg-slate-200">
            <Image src={brand} alt="Gato" width={36} height={36} className='bg-slate-600 rounded-md' />

            <div className="flex flex-col">
                <h3 className="text-md font-bold text-slate-900">gmota</h3>
                <span className="text-xs">Team development</span>
            </div>
        </div>
    )
}