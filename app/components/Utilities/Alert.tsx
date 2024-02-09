"use client"
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineErrorOutline } from "react-icons/md";

interface AlertProps {
  message: string;
  type: 'success' | 'error';
};

export default function Alert({ message, type }: AlertProps) {
  const [show, setShow] = useState(true);

  const icon = type === 'success'
    ? <FiCheckCircle />
    : <MdOutlineErrorOutline />

  const alertStyle = type === 'success'
    ? "bg-green-700"
    : "bg-red-700"

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  return (
    <>
      {show && (
        <div className="fixed w-full p-2 -top-4 left-0 right-0 flex justify-center mt-10 z-50">
          <div className="flex justify-center">
            <div
              role="alert"
              className={`flex items-center px-4 py-2 text-xs leading-normal text-red-100 ${alertStyle} rounded-lg animate-fade-in-down`}
            >
              <span className="inset-y-0 left-0 flex items-center ml-2">
                {icon}
              </span>
              <p className="ml-6">{message}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}