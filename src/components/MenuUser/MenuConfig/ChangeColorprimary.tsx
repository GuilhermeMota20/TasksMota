import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlineColorSwatch } from "react-icons/hi";
import ConfigAccordion from "./ConfigAccordion";

interface ChangeColorPrimaryProps {
    activeIndex: number;
    setActiveIndex: any;
};

export default function ChangeColorPrimary({ activeIndex, setActiveIndex }: ChangeColorPrimaryProps) {
    const [isCurrentColorPrimary, setIsCurrentColorPrimary] = useState('pink');

    const options = [
        { value: 'purple', class: 'bg-purple-600' },
        { value: 'pink', class: 'bg-pink-600' },
        { value: 'cyan', class: 'bg-cyan-600' },
        { value: 'blue', class: 'bg-blue-400' },
    ];

    useEffect(() => {
        const html = document.querySelector<HTMLHtmlElement>("html")!;

        if (isCurrentColorPrimary) {
            // html.removeAttribute('class');
            html.classList.add(isCurrentColorPrimary);
            localStorage.setItem("colorPrimary", isCurrentColorPrimary);
        };

    }, [isCurrentColorPrimary])

    return (
        <ConfigAccordion
            title="Cor principal"
            icon={<HiOutlineColorSwatch />}
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        >
            <div className="flex justify-between gap-2">
                {options.map((option) => (
                    <div key={option.value} className="relative">
                        <input
                            id={option.value}
                            value={option.value}
                            type='radio'
                            name="primaryColor"
                            className={`appearance-none w-6 h-12 rounded-md cursor-pointer border-2 ${option.class} ${isCurrentColorPrimary == option.value ? 'shadow-lg' : ''}`}
                            onChange={(({ target }) => {
                                console.log(target.value);
                                setIsCurrentColorPrimary(target.value);
                            })}
                        />

                        {isCurrentColorPrimary == option.value && (
                            <AiOutlineCheck className="absolute top-4 left-1 text-white font-black" />
                        )}
                    </div>
                ))}
            </div>
        </ConfigAccordion>
    )
}