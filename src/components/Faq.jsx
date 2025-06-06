 import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What do I need to book a car on RentAnything?",
      answer: "You need a valid driver’s license, a payment method, and to meet the minimum age requirement (usually 21+). Some hosts may require additional verification."
    },
    {
      question: "What are the cleaning and safety policies?",
      answer: "All items must be returned in the same condition. For cars, a cleaning fee may apply if returned excessively dirty. Safety policies include contactless pickups and sanitization."
    },
    {
      question: "Do I need my own insurance?",
      answer: "No, RentAnything offers optional protection plans. However, you can use your personal insurance if it covers peer-to-peer rentals."
    },
    {
      question: "Can I get my rental delivered to me?",
      answer: "Yes! Many hosts offer delivery for an additional fee. Check the listing details for availability."
    },
    {
      question: "Can other people drive a car I rented?",
      answer: "Only approved drivers listed on the rental agreement are allowed. Unauthorized drivers violate our policies."
    },
    {
      question: "How can I get unlimited miles during my trip?",
      answer: "Some hosts offer unlimited miles. Filter for this option when searching, or contact the host directly."
    },
    {
      question: "How do I get discounts when booking?",
      answer: "Discounts are available for long-term rentals (weekly/monthly), first-time users, or through promo codes."
    },
    {
      question: "Are there cars available near the airport?",
      answer: "Yes! Use the location filter to search near airports or select 'Airport Pickup' in the listing options."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay/Google Pay."
    },
    {
      question: "Is RentAnything a rental company?",
      answer: "No, we’re a peer-to-peer platform where individuals rent out their personal items."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Guests can cancel for free within 24 hours of booking. After that, fees vary by host. Check the listing details before booking."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-medium text-lg hover:text-green-600 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="ml-4">
                {activeIndex === index ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;