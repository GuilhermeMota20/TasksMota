import { ReactNode } from "react";

interface InputGroupProps {
    label: string;
    children?: ReactNode;
}

export default function InputGroup({ label, children }: InputGroupProps) {
    return (
        <div className="flex flex-col gap-1 mb-4 relative">
            <label>
                {label}
            </label>

            {children}
        </div>
    )
}