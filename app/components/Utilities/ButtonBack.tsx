import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

type ButtonBackProps = {
  className?: string;
};

export default function ButtonBack({ className }: ButtonBackProps) {
  return (
    <>
      <div className={`${className} flex items-center justify-center bg-slate-100 dark:bg-darkBlue-700 rounded-md hover:shadow-md w-12 h-12 cursor-pointer`} >
        <Link href="/">
          <IoReturnDownBack />
        </Link>
      </div>
    </>
  )
}