'use client'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
  {
    question: 'What is this tool?',
    answer: 'It is an AI-powered generator that creates fully functional React components instantly from a simple text prompt, speeding up development and boosting productivity.'
  },
  {
    question: 'How does it generate React components?',
    answer: 'The tool analyzes your prompt using advanced AI models and produces clean, reusable, production-ready React code tailored to your requirements.'
  },
  {
    question: 'Is this tool suitable for beginners?',
    answer: 'Absolutely! Whether you’re a beginner or an experienced developer, the tool helps you save time by converting your ideas into ready-to-use React components without complexity.'
  },
  {
    question: 'What kind of components can it create?',
    answer: 'It can generate a wide range of components including UI elements, forms, dashboards, layouts, modals, cards, lists, and more based on your prompt description.'
  },
  {
    question: 'Can I customize the generated code?',
    answer: 'Yes! The generated React code is clean and editable, allowing you to modify styling, logic, and structure to perfectly match your project’s needs.'
  }
];


  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-400">
            Have another question? Please contact our team!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-zinc-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
