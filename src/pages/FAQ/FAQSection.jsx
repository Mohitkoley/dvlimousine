/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const data = [
  {
      Ques: `How do I book Dynasty Limousine?`,
      Ans: `Call to see if a specific date is available. If the date is available, tell us how many hours you will need the bus or limo. If you like the price quote, give us a call at (631) 587-8500. We recommend calling one week before the event to confirm everything.`,
  },
  {
      Ques: `Is alcohol allowed on the buses?`,
      Ans: `Alcohol is allowed on all our vehicles. You must be 21 years of age or older to consume alcohol while riding in any of our limos or buses.`,
  },
  {
      Ques: `What comes on the bus?`,
      Ans: `Our buses are all equipped with limo and/or shuttle-style leather seating, electric sound systems, small bar areas, and iPod connections.`,
  },
  {
      Ques: `Do you provide alcohol?`,
      Ans: `We don't have an actual selection of alcoholic beverages. We recommend you BYOB`,
  },
  {
      Ques: `Do you have a DJ?`,
      Ans: `We do not have a DJ on board our limos or buses. We recommend you bring your own music.`,
  },
  {
      Ques: `Do you travel to the wineries?`,
      Ans: `Yes, we travel to local wineries in the New York area routinely.`,
  },
  {
      Ques: `Do you require a deposit?`,
      Ans: `We do require a $100-$200 credit or debit card non-refundable deposit.`,
  },
  {
      Ques: `How many people fit on your bus? Can I exceed the max number of people?`,
      Ans: `We have seating capacity from 3-37 passengers depending on the vehicle you choose. We do not recommend that you exceed the limits that we've set forth.`,
  },
  {
      Ques: `When does our time start?`,
      Ans: `Your time starts upon arrival at the pickup point and goes until dropped off at the location given.`,
  },
  {
      Ques: `Do the buses have A/C?`,
      Ans: `Several of our vehicles have A/C. Please check out the vehicle descriptions for the vehicles that have A/C.`,
  },
  {
      Ques: `Is tip included in the price?`,
      Ans: `Prices are quoted with a 20% gratuity. Anything additional is up to the client.`,
  },
  {
      Ques: `Can we bring coolers?`,
      Ans: `Yes, we allow coolers.`,
  },
  {
      Ques: `What is the cancellation policy?`,
      Ans: `We expect a 48-hour notice for cancellations. Deposits are not refundable but can be transferred to the new date of travel.`,
  },
  
];

const FAQAccordionItem = ({ item, isOpen, onClick }) => {
  return (
      <div className="border-b border-gray-700/50 last:border-none">
          <button className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-gray-900/30" onClick={onClick}>
              <span className="text-white font-medium">{item.Ques}</span>
              {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
              ) : (
                  <ChevronDown className="w-5 h-5 text-amber-500 flex-shrink-0" />
              )}
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="px-6 py-4 text-gray-300">{item.Ans}</p>
          </div>
      </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="mx-10 py-3">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
                Frequently Asked Questions
            </h2>
            <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                {data.map((item, index) => (
                    <FAQAccordionItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default FAQSection
