import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputCheckBoxProps {
    label: string;
    isChecked: boolean;
    setIsChecked: (value: React.SetStateAction<boolean>) => void;
};

const InputCheckBoxBase:  ForwardRefRenderFunction<HTMLInputElement, InputCheckBoxProps> = ({ label, isChecked, setIsChecked, ...rest }, ref)=> {
    return (
        <label className="mb-0 flex items-center justify-center cursor-pointer">
            <div className="mr-2 bg-slate-300/[.5] w-5 h-5 rounded-full grid place-items-center border border-slate-300">
                {isChecked && (
                    <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>
                )}
            </div>
    
            <span className="order-1 flex-1">{label}</span>
    
            <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                ref={ref}
                {...rest}
                onChange={() => setIsChecked((prev: boolean) => !prev)}
            />
        </label>
    )
}

export const InputCheckBox = forwardRef(InputCheckBoxBase);