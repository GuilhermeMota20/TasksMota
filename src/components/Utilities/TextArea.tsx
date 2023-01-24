import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface TextAreaProps {
    placeholder?: string;
    error?: FieldError;
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ placeholder, error = null, ...rest }, ref) => {
    return (
        <>
            <textarea
                className="w-full bg-slate-100 text-slate-600 placeholder:text-slate-400 hover:border-pink-600 focus:border-pink-600"
                placeholder={placeholder}
                ref={ref}
                {...rest}
            ></textarea>

            {
                !!error && (
                    <span className="text-red-600 absolute top-0 right-0 text-xs">{error.message}</span>
                )
            }
        </>
    )
}

export const TextArea = forwardRef(TextAreaBase);