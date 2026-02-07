import { Sparkles } from 'lucide-react';

function Hero() {
  return (
    <div className="pt-24 pb-16 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6 animate-pulse">
          <Sparkles size={16} />
          <span className="text-sm font-semibold">Start Building Your Future Today</span>
        </div>

        <h1 className="text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Welcome to <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">ProFolio</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Create professional resumes and stunning portfolios in minutes. Stand out from the crowd and land your dream job.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-sky-500/50">
            Get Started Free
          </button>
          <button className="bg-white text-slate-700 px-8 py-4 rounded-lg font-bold text-lg border-2 border-slate-300 transition-all duration-300 hover:border-sky-500 hover:text-sky-600 hover:-translate-y-1">
            View Examples
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
