import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface TextAreaProps {
    placeholder?: string;
    error?: FieldError;
    value?: string;
    onChange: (target: any)=> void;
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ placeholder, error = null, value, onChange, ...rest }, ref) => {
    return (
        <>
            <textarea
                className="w-full bg-slate-100 text-slate-600 placeholder:text-slate-400 hover:border-pink-600 focus:border-pink-600 dark:bg-darkBlue-800"
                placeholder={placeholder}
                value={value}
                maxLength={80}
                ref={ref}
                {...rest}
                onChange={onChange}
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