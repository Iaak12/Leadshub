import { CheckCircle2, ArrowRight } from 'lucide-react';
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
      </div>
    </div>
  );
};

export default AboutUs;
