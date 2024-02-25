"use client";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";

interface FAQItemProps {
  question: string,
  answer: string,
}

export const FAQItem = (props: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='select-none border-secondary-300 rounded-lg p-4 border-2 m-4 transition-all' onClick={handleToggle}>
      <div className='grid grid-cols-8 gap-2 items-center'>
        <FaPlus className={`justify-self-center text-primary-0 text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`} />
        <h2 className='col-span-7 text-primary-0 text-lg font-regular'>{props.question}</h2>
      </div>
      <p
        className={`text-accent-500 text-xl duration-200 ease-in transition-all opacity-0 delay-200 ${isOpen ? 'opacity-100 block' : 'hidden'}`}
      >
        {props.answer}
      </p>
    </div>
  );
};

export default FAQItem;
