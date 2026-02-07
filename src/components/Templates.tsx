import { FileText, Code, Palette, Layout, Briefcase, Minimize2 } from 'lucide-react';

function Templates() {
  const resumeTemplates = [
    {
      title: 'Professional',
      description: 'Clean and corporate design for traditional industries',
      icon: Briefcase,
      color: 'from-blue-100 to-blue-50',
    },
    {
      title: 'Creative',
      description: 'Colorful and bold layout for creative professionals',
      icon: Palette,
      color: 'from-purple-100 to-purple-50',
    },
    {
      title: 'Academic',
      description: 'Detailed and structured format for research roles',
      icon: FileText,
      color: 'from-green-100 to-green-50',
    },
  ];

  const portfolioTemplates = [
    {
      title: 'Developer',
      description: 'Focus on GitHub projects and technical skills',
      icon: Code,
      color: 'from-pink-100 to-pink-50',
    },
    {
      title: 'Designer',
      description: 'Visual grid layout showcasing your best work',
      icon: Layout,
      color: 'from-orange-100 to-orange-50',
    },
    {
      title: 'Minimalist',
      description: 'Simple, fast, and elegant presentation',
      icon: Minimize2,
      color: 'from-slate-100 to-slate-50',
    },
  ];

  return (
    <div className="py-16 px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-3">Resume Templates</h2>
          <p className="text-center text-slate-600">Choose from our professionally designed templates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {resumeTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <div
                key={template.title}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                  <Icon size={64} className="text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{template.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{template.description}</p>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-sky-500">
                    Select Template
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-slate-300 my-12"></div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-3">Portfolio Templates</h2>
          <p className="text-center text-slate-600">Showcase your work with stunning portfolio designs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <div
                key={template.title}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                  <Icon size={64} className="text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{template.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{template.description}</p>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-sky-500">
                    Select Template
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Templates;
