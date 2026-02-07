import { Check, X, Rocket } from 'lucide-react';

function Pricing() {
  const plans = [
    {
      name: 'Quick Start',
      price: '9',
      period: '/resume',
      features: [
        { text: '1 Basic Resume Template', available: true },
        { text: 'PDF Download', available: true },
        { text: 'Portfolio Access', available: false },
        { text: 'Custom Domain', available: false },
      ],
      buttonText: 'Start for ₹9',
      buttonStyle: 'outline',
      popular: false,
    },
    {
      name: 'Career Pro',
      price: '49',
      period: '/month',
      features: [
        { text: 'Unlimited Resumes', available: true, bold: true },
        { text: '3 Portfolio Templates', available: true, bold: true },
        { text: 'Shareable Profile Link', available: true },
        { text: 'ATS Optimization Check', available: true },
      ],
      buttonText: 'Get Pro Access',
      buttonStyle: 'solid',
      popular: true,
    },
    {
      name: 'Ultimate',
      price: '99',
      period: '/lifetime',
      features: [
        { text: 'Everything in Pro', available: true },
        { text: 'All Premium Templates', available: true, bold: true },
        { text: 'Custom Domain Support', available: true },
        { text: 'Priority Support', available: true },
      ],
      buttonText: 'Go Ultimate',
      buttonStyle: 'outline',
      popular: false,
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-full mb-6 animate-pulse font-bold text-sm">
          <Rocket size={16} />
          LIMITED TIME LAUNCH OFFER
        </div>

        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
          Build Your Future for the Price of a Chai
        </h1>
        <p className="text-slate-400 text-lg">Professional resumes and portfolios shouldn't cost a fortune.</p>
      </div>

      <div className="flex justify-center gap-6 px-8 flex-wrap max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl p-8 w-80 shadow-xl transition-all duration-300 hover:-translate-y-3 ${
              plan.popular ? 'border-2 border-sky-400 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-400 text-slate-900 px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-slate-600 text-lg mb-2">{plan.name}</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-extrabold text-slate-900">₹{plan.price}</span>
                <span className="text-slate-500 ml-2">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-sm">
                  {feature.available ? (
                    <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X size={18} className="text-slate-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.bold ? 'font-semibold' : ''}>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                plan.buttonStyle === 'solid'
                  ? 'bg-sky-400 text-slate-900 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/40'
                  : 'bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
