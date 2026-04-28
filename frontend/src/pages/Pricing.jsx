import { Check, Users, Target, Rocket, Zap, HeartHandshake } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter Setup",
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
                  href="https://wa.me/919178337808" 
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

        {/* Who We Work With Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Work With</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We partner with serious business owners and organizations that rely on performance-driven lead generation to scale revenue.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Coaches & Consultants", "Course Creators & Infopreneurs", "Affiliate & Network Marketers", 
              "Service-Based Businesses", "Real Estate Developers & Agencies", "Travel Agencies & Tour Operators", 
              "Healthcare & Wellness Clinics", "Education & Training Institutes", "Local Businesses (High-Ticket)", "E-commerce Brands (Lead Gen)"
            ].map((industry, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[80px]">
                <p className="text-sm font-semibold text-slate-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mt-24 bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Service Process</h2>
            <p className="text-slate-600">The roadmap to your business growth and digital scaling.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Onboarding & Service Activation",
                desc: "Get started by choosing a suitable service package with LeadsHub Media. Once onboarded, our team initiates a seamless setup process to kickstart your growth journey.",
                icon: Users
              },
              {
                title: "Strategic Growth Consultation",
                desc: "Our experts will connect with you for a detailed consultation to understand your business, target audience, and revenue goals. We will craft a customized strategy focused on scalable growth.",
                icon: Target
              },
              {
                title: "Advanced Ads Setup & Execution",
                desc: "We design, set up, and launch high-converting ad campaigns across platforms like Facebook and Instagram, ensuring precise audience targeting and maximum reach.",
                icon: Rocket
              },
              {
                title: "High-Quality Lead Generation",
                desc: "Start receiving qualified and conversion-ready leads directly to your preferred platform (WhatsApp, CRM, landing pages). Our system ensures consistent and relevant lead flow.",
                icon: Zap
              },
              {
                title: "Dedicated Personal Support",
                desc: "Our dedicated support team continuously monitors your campaigns, provides timely assistance, and optimizes performance to maximize your ROI.",
                icon: HeartHandshake
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-2">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
