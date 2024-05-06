import { useState } from "react";

interface AccordionProps {
    title: string;
    children: string | React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-grey-100 py-4">
            <div
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={toggleAccordion}>
                <div className={`uppercase ${isOpen ? "font-bold" : ""}`}>{title}</div>
                <div className="text-xl">{isOpen ? "-" : "+"}</div>
            </div>

            <div
                className={`overflow-hidden transition-max-h ease-in-out duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                }`}>
                <div className="pt-4">{children}</div>
            </div>
        </div>
    );
};

// AccordionGroup
interface AccordionGroupProps {
    children: React.ReactNode;
}

const AccordionGroup = ({ children }: AccordionGroupProps) => {
    return <div className="space-y-1 my-6">{children}</div>;
};

export { Accordion, AccordionGroup };
