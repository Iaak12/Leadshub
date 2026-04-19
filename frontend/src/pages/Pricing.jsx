import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "One Time Setup",
      description: "In this service, your work will be for two to three days only. Once your ad will be placed and leads will be generated from it, but since this is only for two days, after this the service will end.",
      features: [
        "2-3 Days Setup Duration",
        "Lead Generation",
        "Ad Placement",
        "Basic Targeting"
      ],
      popular: false
    },
    {
      name: "Monthly Setup Lite",
      description: "In this service, your work will be for 1 month, that is, your ad will be placed multiple times in 1 month and you will be given the best results by creating them and a personal team member.",
      features: [
        "1 Month Duration",
        "Multiple Ad Placements",
        "Personal Team Member",
        "Support & Guidance",
        "Best Results Optimization"
      ],
      popular: true
    },
    {
      name: "Monthly Setup Pro",
      description: "Your ad will be placed multiple times in 1 month by a special personal team member who has given quality results to minimum 50+ clients. Support, video editing, content included.",
      features: [
        "1 Month Duration",
        "Expert Team Member (50+ Clients Success)",
        "Personal Support & Guidance",
        "Personal Number Provided",
        "Personal Mentorship",
        "Video Editing & Content Included"
      ],
      popular: false
    }
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Service Types And Charges</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are providing three types of services which are given below and the charges are different because charges matter based on what type of business you have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 border ${plan.popular ? 'border-indigo-600 shadow-2xl shadow-indigo-500/10 scale-105 z-10' : 'border-slate-200 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 h-32">
                {plan.description}
              </p>
              <div className="mb-8">
                <a 
                  href="https://wa.me/+916390002006" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-xl text-center font-semibold transition-colors ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}
                >
                  Contact For Price
                </a>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
