import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputBaeProps {
    type?: string;
    placeholder?: string;
    errors?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaeProps> = ({ errors = null, placeholder, type = 'text', ...rest }, ref) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-slate-100 text-slate-600 placeholder:text-slate-400 hover:border-pink-600 focus:border-pink-600"
                autoComplete="off"
                ref={ref}
                {...rest}
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