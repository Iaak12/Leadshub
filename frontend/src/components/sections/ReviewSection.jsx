import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoModal from '../common/VideoModal';

// Import videos
import vid1 from '../../assets/video/WhatsApp Video 2026-04-19 at 7.51.03 PM (1).mp4';
import vid2 from '../../assets/video/WhatsApp Video 2026-04-19 at 7.51.03 PM.mp4';
import vid3 from '../../assets/video/WhatsApp Video 2026-04-19 at 7.51.04 PM.mp4';
import vid4 from '../../assets/video/WhatsApp Video 2026-04-19 at 7.51.06 PM (1).mp4';
import vid5 from '../../assets/video/WhatsApp Video 2026-04-19 at 7.51.06 PM.mp4';

const ReviewSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const videos = [
    { id: 1, src: vid1, author: "Success Story 1" },
    { id: 2, src: vid2, author: "Success Story 2" },
    { id: 3, src: vid3, author: "Success Story 3" },
    { id: 4, src: vid4, author: "Success Story 4" },
    { id: 5, src: vid5, author: "Success Story 5" },
  ];

  const chatReviews = [
    {
      id: 1,
      name: "Maheera",
      content: "Quality bahut Achi thi sir usme se 1 closing bhi ho gai thi (Premium package)",
      color: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      id: 2,
      name: "Raziya",
      content: "3 enrollment done today. Thank you for your script. They just joined webinar and enrolled right away. ❤️",
      color: "bg-indigo-50",
      borderColor: "border-indigo-100"
    },
    {
      id: 3,
      name: "Nasrin",
      content: "Aaj ek pro package ka enrollment hua h Allahmdu lillah ❤️ Aapke Ads Ki Leds Se",
      color: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      id: 4,
      name: "Supritha",
      content: "This month's Ads result, Kunal. 1 more from the Ad. I want to continue for the next month also.",
      color: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      id: 5,
      name: "Malika",
      content: "1 premium plus close done. Thank you so much for the your ad service ❤️",
      color: "bg-rose-50",
      borderColor: "border-rose-100"
    },
    {
      id: 6,
      name: "Akanksha",
      content: "1 closing done with Pro from your ad. Thank you 😊",
      color: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      id: 7,
      name: "Anu Singh",
      content: "18 leads today and 1 enrollment done with Elite package. Thank you!",
      color: "bg-indigo-50",
      borderColor: "border-indigo-100"
    },
    {
      id: 8,
      name: "Ayub Khan",
      content: "Thanks a lot Kunal bhai! Successfully enrolled a client with the Elite package!",
      color: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      id: 9,
      name: "Nilu Mistry",
      content: "Our December results are here: Premium Plus! Thank you for giving the best service and guidance throughout my journey.",
      color: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      id: 10,
      name: "Suvetha G",
      content: "Today 2 Premium Plus done! Thank you so much ❤️ Your personal webinar helped me a lot.",
      color: "bg-rose-50",
      borderColor: "border-rose-100"
    },
    {
      id: 11,
      name: "Sumit Kumar",
      content: "Thank you so much for your ads service. Finally, I kept my promise, and the credit goes to you! ❤️",
      color: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      id: 12,
      name: "Shama Qureshi",
      content: "I got exactly the kind of leads I wanted—educated and understanding. I had wasted 50k elsewhere, but your service is the best! 😍",
      color: "bg-indigo-50",
      borderColor: "border-indigo-100"
    },
    {
      id: 13,
      name: "Manpreet Kaur",
      content: "Thank you Kunal Sir! With your strategy, I successfully completed my ₹2 Lakh Hall of Fame. Truly grateful.",
      color: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      id: 14,
      name: "Ayub Khan",
      content: "Closed another Pro package! Your leads and guidance are a game changer, bhai. ❤️",
      color: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      id: 15,
      name: "Shama Qureshi",
      content: "The ad is performing amazing! 152 leads on a low budget, and 110 reached out on WhatsApp. Thank you! 🌟",
      color: "bg-rose-50",
      borderColor: "border-rose-100"
    },
    {
      id: 16,
      name: "Shivani Karn",
      content: "Good news! One Premium Plus closed today! ❤️ After a very long time, my account opened again. Thank you! 😊",
      color: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      id: 17,
      name: "Shivani Karn",
      content: "Around 3 months k baad meri sale close hui h it's a very happy moment for me. Many more to come! 😊",
      color: "bg-indigo-50",
      borderColor: "border-indigo-100"
    }
  ];

  // Auto-slide logic for videos (Unstoppable infinity loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeVideoIndex, videos.length]);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-6"
        >
          <Star className="w-4 h-4 fill-current" />
          Success Stories
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Proof That <span className="text-indigo-600">LeadsHub</span> Delivers Results
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          Don't just take our word for it. Hear directly from our clients who are scaling their businesses with high-quality leads.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[500px]">
          
          {/* Left Side: Auto-Sliding Video UI */}
          <div 
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative h-full aspect-[9/16] md:aspect-auto md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 group">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeVideoIndex}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setSelectedVideo(videos[activeVideoIndex].src)}
                >
                  <video
                    src={videos[activeVideoIndex].src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:bg-indigo-600/80 group-hover:border-indigo-400 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-2">Watch Review #{activeVideoIndex + 1}</p>
                    <h3 className="text-2xl font-bold text-white leading-tight">Client Success Journey</h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar Indicators */}
              <div className="absolute top-6 left-8 right-8 flex gap-2 z-20">
                {videos.map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 flex-grow rounded-full bg-white/20 overflow-hidden cursor-pointer"
                    onClick={() => setActiveVideoIndex(i)}
                  >
                    <motion.div 
                      initial={false}
                      animate={{ 
                        width: i === activeVideoIndex ? "100%" : (i < activeVideoIndex ? "100%" : "0%") 
                      }}
                      className="h-full bg-indigo-500"
                      transition={{ 
                        duration: i === activeVideoIndex ? 5.1 : 0.3, // Slightly longer than interval to ensure smooth handoff
                        ease: "linear" 
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}}
                  className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto hover:bg-black/40"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveVideoIndex((prev) => (prev + 1) % videos.length)}}
                  className="p-3 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto hover:bg-black/40"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Auto-Scrolling Reviews */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <div className="relative h-[550px] overflow-hidden group">
              {/* Vertical Scroll Effect */}
              <motion.div 
                className="flex flex-col gap-4"
                animate={{ y: [0, -1520] }} // Adjusted for a smoother 17-item loop
                transition={{ 
                  duration: 60, // Significantly slower
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "linear",
                  paused: isHovered
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {[...chatReviews, ...chatReviews].map((chat, idx) => (
                  <div
                    key={`${chat.id}-${idx}`}
                    className={`p-6 rounded-2xl ${chat.color} border ${chat.borderColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shadow-sm relative`}
                  >
                    <div className="absolute top-4 right-4 opacity-10 font-serif text-4xl leading-none">
                      "
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-lg font-bold text-slate-800 shadow-sm border border-slate-100">
                        {chat.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{chat.name}</h4>
                      </div>
                    </div>

                    <p className="text-slate-700 leading-relaxed font-medium text-sm italic">
                      "{chat.content}"
                    </p>

                    <div className="mt-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Gradient overlays to mask the list */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
            </div>
            
          </div>

        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo}
      />
    </section>
  );
};

export default ReviewSection;
