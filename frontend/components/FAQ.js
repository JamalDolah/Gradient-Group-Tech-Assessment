import { useState } from 'react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items || items.length === 0) {
    return null;
  }

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-[112px] font-semibold text-black mb-12 text-left font-brsonoma leading-tight">
          FAQ
        </h2>
        <div className="space-y-0">
          {items.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-[24px] text-black font-ibmplex uppercase">
                  {item.question}
                </span>
                <span className="text-black text-2xl font-ibmplex ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {index < items.length - 1 && (
                <div className="border-b border-gray-300"></div>
              )}
              {openIndex === index && (
                <div className="py-4">
                  <p className="text-[24px] text-black leading-relaxed font-ibmplex">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

