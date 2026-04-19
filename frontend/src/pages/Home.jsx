import { ArrowRight, CheckCircle2, Play, Users, Target, Rocket, HeartHandshake, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import ReviewSection from '../components/sections/ReviewSection';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white" />
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              #1 Lead Generation Agency
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Transform Your Ad Expertise Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Constant Income</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Do you know that today every person is using a mobile phone? If you haven't decided to take your business online, you may be left far behind. We'll show you how to take it online now and generate high-quality leads and customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#about" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/20 w-full sm:w-auto">
                Presentation of our services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <h4 className="text-3xl font-bold text-indigo-600 mb-2">100%</h4>
              <p className="text-sm text-slate-500 font-medium">Satisfaction Rate</p>
            </div>
            <div className="text-center px-4">
              <h4 className="text-3xl font-bold text-indigo-600 mb-2">500+</h4>
              <p className="text-sm text-slate-500 font-medium">Happy Clients</p>
            </div>
            <div className="text-center px-4">
              <h4 className="text-3xl font-bold text-indigo-600 mb-2">95%</h4>
              <p className="text-sm text-slate-500 font-medium">Renewal Rate</p>
            </div>
            <div className="text-center px-4">
              <h4 className="text-3xl font-bold text-indigo-600 mb-2">200+</h4>
              <p className="text-sm text-slate-500 font-medium">Feedbacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What We Are Providing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are providing meta ads service and generating quality leads for your business and these things to scale your business digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Become Client", desc: "Started LeadsHub with any service package and become a client of LeadsHub then we will start your work.", icon: Users },
              { title: "Meeting for growth", desc: "Our Team will contact you through phone call and discuss about your business growth that how we can scale fast.", icon: Target },
              { title: "Ads Setup", desc: "Our team will create ad campaigns and start service for you and start showing ads to your targeted audience.", icon: Rocket },
              { title: "Quality Leads", desc: "Quality leads will start coming in your destination where you want and you will convert them and generate your sales.", icon: Zap },
              { title: "Personal Support", desc: "Special team will support you in any problem and when you have any doubt you can ask with our special team.", icon: HeartHandshake }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h5>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-20" />
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How LeadsHub Works For You</h2>
          <h4 className="text-xl text-indigo-400 mb-8 font-medium">Watch Complete Presentation Video</h4>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Whatever your business may be, whether you are from any industry, online or offline, how can you generate quality leads for your business, how will your business grow, and how Leadshub will help you in growing your business at the speed of 5x. all this has been explained in detail in this video. Quickly watch the full video and follow the further process.
          </p>
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group cursor-pointer flex items-center justify-center mb-12">
             <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
               <Play className="w-8 h-8 ml-1" />
             </div>
          </div>
          <a href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 transition-all bg-white rounded-full hover:bg-slate-100">
            Start Your Service Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose LeadsHub</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience unmatched performance, smart targeting, and innovative tools that empower ad professionals to scale campaigns effortlessly and efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Verified Leads Only", desc: "We understand your niche and create quality content for it, then select a good audience and generate leads with good targeting." },
              { title: "Personal Mentorship", desc: "We arrange a special meeting with you to discuss the type of campaigns that can be implemented for your business growth to get better results." },
              { title: "Script Of Ads Creatives", desc: "My special team will research about your business and give a best content script to you and also my second team to make perfect ads creative." },
              { title: "Creative Making", desc: "My second team will make amazing ads creatives, content which will shown to your leads. Creative making is included in our service." },
              { title: "12/7 Support", desc: "Our dedicated support team is always ready to help if any case you have any questions or problems. My team will resolve your problem under 24 hours." },
              { title: "Previous Top Results", desc: "We are working with the top leaders and not only this, we are also bringing new people to the leaderboard and have already brought many people there." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h5>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Most Important Thing</h4>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              Kisi Ko Bhi Payment Karne Se Pahle Ye Check Jarur Kare Ki Bo Trusted Hai Ya Nahi Usne Aaj Se Pahle Aapke Jaise Logo Ka Kaam Kiya Hai Ya Nhi Aur Bo Results De Sakta Hai Ya Nhi.
            </p>
            <a href="https://www.instagram.com/leadsartist?igsh=MXV2OW1nNHRjY3V6ZA==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full hover:bg-indigo-100 transition-colors">
              Go to Instagram & Check Highlighits
            </a>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <ReviewSection />
    </div>
  );
};

export default Home;
