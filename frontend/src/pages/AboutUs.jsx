import { CheckCircle2, ArrowRight, Users, Target, Rocket, Zap, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-50 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="About LeadsHub Team" 
                className="relative rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-3xl font-extrabold text-indigo-600 mb-1">5+</p>
                <p className="text-sm font-semibold text-slate-600">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-4 block">About LeadsHub</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              We Are Digital Growth Experts
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              It is true that your hard work will be 100% responsible for the success you achieve, but if you start with us, we will be a part of your journey and you will achieve it a little faster.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              LeadsHub empowers ad professionals to scale their campaigns effortlessly through verified, highly targeted leads and innovative proven strategies curated by expert marketers.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Government Registered Company</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">High Conversion Rate Strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Personalized Mentorship for Growth</span>
              </div>
            </div>

            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Who We Work With Section */}
        <div className="mt-32 pt-24 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Work With</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We partner with serious business owners and organizations that rely on performance-driven lead generation to scale revenue.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Coaches & Consultants", "Course Creators & Infopreneurs", "Affiliate & Network Marketers", 
              "Service-Based Businesses", "Real Estate Developers & Agencies", "Travel Agencies & Tour Operators", 
              "Healthcare & Wellness Clinics", "Education & Training Institutes", "Local Businesses (High-Ticket)", "E-commerce Brands (Lead Gen)"
            ].map((industry, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex items-center justify-center min-h-[100px]">
                <p className="text-sm font-bold text-slate-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Working Methodology Section */}
        <div className="mt-32 pt-24 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Working Methodology</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a systemized approach to ensure every campaign we launch is optimized for maximum conversion and ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Onboarding & Service Activation",
                desc: "Get started by choosing a suitable service package with LeadsHub Media. Once onboarded, our team initiates a seamless setup process to kickstart your growth journey.",
                icon: Users,
                step: "01"
              },
              {
                title: "Strategic Growth Consultation",
                desc: "Our experts will connect with you for a detailed consultation to understand your business, target audience, and revenue goals. We will craft a customized strategy focused on scalable growth.",
                icon: Target,
                step: "02"
              },
              {
                title: "Advanced Ads Setup & Execution",
                desc: "We design, set up, and launch high-converting ad campaigns across platforms like Facebook and Instagram, ensuring precise audience targeting and maximum reach.",
                icon: Rocket,
                step: "03"
              },
              {
                title: "High-Quality Lead Generation",
                desc: "Start receiving qualified and conversion-ready leads directly to your preferred platform (WhatsApp, CRM, landing pages). Our system ensures consistent and relevant lead flow.",
                icon: Zap,
                step: "04"
              },
              {
                title: "Dedicated Personal Support",
                desc: "Our dedicated support team continuously monitors your campaigns, provides timely assistance, and optimizes performance to maximize your ROI.",
                icon: HeartHandshake,
                step: "05"
              }
            ].map((method, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-white border-2 border-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                    <method.icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-4 border-white">
                    {method.step}
                  </span>
                </div>
                <div className="text-center md:text-left pt-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h4>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
