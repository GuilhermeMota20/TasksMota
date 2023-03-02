import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputBaseProps {
    type: string;
    value: string;
    placeholder?: string;
    errors?: FieldError;
    className?: string;
    onChange: (target: any)=> void;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = ({ className, onChange, errors = null, placeholder, type = 'text', value, ...rest }, ref) => {
    return (
        <>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                className={`w-full bg-slate-100 text-slate-600 placeholder:text-slate-400 hover:border-pink-600 focus:border-pink-600 dark:text-slate-400 dark:bg-darkBlue-800 ${className}`}
                // autoComplete="off"
                ref={ref}
                {...rest}
                onChange={onChange}
            />

            {
                !!errors && (
                    <span className="text-red-600 absolute top-0 right-0 text-xs">{errors.message}</span>
                )
            }
        </>
    )
}

export const Input = forwardRef(InputBase);