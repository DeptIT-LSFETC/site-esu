"use client";

interface QuestionBoxProps {
  question: string,
  answer: string,
}

export const QuestionBox = (props: QuestionBoxProps) => {
  return (
    <div className='select-none shadow-lg border-2 border-secondary-100 rounded-lg p-12 m-4'>
      <h1 className='text-primary-700 text-3xl md:text-4xl text-center font-semibold pb-4'>{props.question}</h1>
      <h2 className='text-xl md:text-2xl text-center'>{props.answer}</h2>
    </div>
  );
};

export default QuestionBox;
