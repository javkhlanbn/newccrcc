import React from 'react';
import { DOCUMENTS } from '../constants';
import { FileText, Download, Search } from 'lucide-react';

const Transparency: React.FC = () => {
  const getIconColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'text-red-500';
      case 'XLSX': return 'text-green-500';
      case 'DOCX': return 'text-blue-500';
      default: return 'text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ил тод байдал
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Төсвийн зарцуулалт, үйл ажиллагааны тайлан болон аудитын дүгнэлтүүдийг нээлттэй байршуулж байна.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {['All', 'Budget', 'Report', 'Audit', 'Plan'].map((filter) => (
              <button 
                key={filter}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {filter === 'All' ? 'Бүгд' : filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Хайх..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTS.map((doc) => (
            <div key={doc.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-shadow group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 dark:bg-slate-800 ${getIconColor(doc.type)}`}>
                  <FileText className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-slate-800 text-slate-500 rounded">
                  {doc.type}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {doc.title}
              </h3>
              <div className="mt-auto pt-4 flex items-center justify-between text-sm text-slate-500 border-t border-gray-50 dark:border-slate-800">
                <span>{doc.date}</span>
                <span className="flex items-center">
                  {doc.size}
                  <button className="ml-3 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-400 hover:text-primary-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transparency;