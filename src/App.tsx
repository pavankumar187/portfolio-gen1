import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Templates from './components/Templates';
import Pricing from './components/Pricing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation onNavigate={handleNavigate} />

      {currentPage === 'home' && (
        <>
          <Hero />
          <Templates />
          <Pricing />
        </>
      )}

      {currentPage === 'portfolio' && (
        <div className="pt-24 pb-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Portfolio Generation</h1>
            <p className="text-xl text-slate-600 mb-8">
              Create a stunning portfolio website in minutes. Showcase your projects, skills, and achievements.
            </p>
            <div className="bg-white rounded-xl p-12 shadow-lg">
              <p className="text-slate-500">Portfolio builder coming soon...</p>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'resume' && (
        <div className="pt-24 pb-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Resume Generation</h1>
            <p className="text-xl text-slate-600 mb-8">
              Build professional resumes that get you hired. ATS-friendly templates that stand out.
            </p>
            <div className="bg-white rounded-xl p-12 shadow-lg">
              <p className="text-slate-500">Resume builder coming soon...</p>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'login' && (
        <div className="pt-24 pb-16 px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Welcome Back</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-400 text-slate-900 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-sky-300"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-slate-600 mt-4 text-sm">
                Don't have an account? <span className="text-sky-500 font-semibold cursor-pointer">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
