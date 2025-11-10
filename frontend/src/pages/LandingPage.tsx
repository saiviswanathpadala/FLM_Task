import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-sm bg-white/30 border-b border-white/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-[#0a66c2]" />
              <span className="text-xl font-bold text-[#0a66c2]">CompanyHub</span>
            </div>
            <Link to="/companies" className="px-4 py-2 text-sm font-medium text-[#0a66c2] hover:text-[#004182] transition-colors">
              Browse Companies
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/40 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
          >
            <Sparkles className="h-4 w-4 text-[#00a699]" />
            <span className="text-sm font-medium text-gray-700">Discover Your Next Opportunity</span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0a66c2] via-[#0084ff] to-[#00a699] bg-clip-text text-transparent leading-tight"
          >
            Explore Companies
            <br />
            Like Never Before
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Access a comprehensive directory of companies with advanced search, filtering, and insights.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/companies"
              className="group px-8 py-4 bg-gradient-to-r from-[#0a66c2] to-[#0084ff] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
