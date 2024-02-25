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
      <div className='grid grid-cols-10 gap-2 items-center'>
        <h2 className='col-span-9 text-primary-0 text-lg md:text-3xl font-semibold'>{props.question}</h2>
        <FaPlus className={`order-first md:order-last justify-self-center text-primary-0 text-xl md:text-4xl transition-transform ${isOpen ? 'rotate-45' : ''}`} />
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
