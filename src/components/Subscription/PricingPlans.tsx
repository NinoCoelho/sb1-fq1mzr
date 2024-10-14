import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  { name: 'Basic', price: 9.99, features: ['Up to 50 patients', 'Basic reporting', 'Email support'] },
  { name: 'Pro', price: 19.99, features: ['Unlimited patients', 'Advanced reporting', 'Priority support'] },
  { name: 'Enterprise', price: 49.99, features: ['Custom features', 'Dedicated account manager', '24/7 phone support'] },
];

const PricingPlans: React.FC = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planName: string) => {
    // In a real application, this would redirect to a checkout page or process
    navigate(`/subscribe/${planName.toLowerCase()}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the right plan for your practice
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple, transparent pricing that grows with you
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-5xl font-extrabold text-gray-900">${plan.price}</p>
                <p className="mt-1 text-xl text-gray-500">/month</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700"
                >
                  Subscribe to {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;