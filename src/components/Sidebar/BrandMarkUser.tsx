import Image from "next/image";
import brand from '../../assets/favicon_insta.png';

export default function BrandMarkUser() {
    return (
        <div className="flex items-center justify-center px-4 m-4 py-2 gap-4 rounded-md transition">
            <h1 className="font-bold text-2xl text-center">ToDoTask <span className="text-pink-600">.</span></h1>
        </div>
    )
}