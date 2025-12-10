import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MOCK_PROJECTS } from '../constants';
import { CheckCircle2, FileText, Calendar, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = Object.values(MOCK_PROJECTS).find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20">
      {/* Header Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Нүүр хуудас руу буцах
        </Link>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-video rounded-xl overflow-hidden shadow-inner">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                project.status === 'Ongoing' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              }`}>
                {project.status === 'Ongoing' ? 'Хэрэгжиж байна' : 'Төлөвлөсөн'}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Objectives */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 mr-3 rounded-full"></span>
                Төслийн зорилго
              </h2>
              <ul className="space-y-4">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 mr-3 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300">{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Activities */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 mr-3 rounded-full"></span>
                Хэрэгжүүлэх үйл ажиллагаа
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                <ul className="list-disc pl-5 space-y-2">
                  {project.activities.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

             {/* Outputs */}
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 mr-3 rounded-full"></span>
                Хүлээгдэж буй үр дүн
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.outputs.map((out, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{out}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 sticky top-24">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-slate-700">
                Татах материал
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                  <FileText className="w-8 h-8 text-red-500 mr-3 opacity-80 group-hover:opacity-100" />
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Төслийн танилцуулга.pdf</p>
                    <p className="text-xs text-slate-500">2.4 MB</p>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                  <FileText className="w-8 h-8 text-blue-500 mr-3 opacity-80 group-hover:opacity-100" />
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Тайлан 2023.docx</p>
                    <p className="text-xs text-slate-500">1.1 MB</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-slate-700">
                  Холбогдох мэдээ
                </h3>
                <div className="space-y-4">
                  <div className="group cursor-pointer">
                    <span className="text-xs text-slate-400 flex items-center mb-1">
                      <Calendar className="w-3 h-3 mr-1" /> 2024-05-10
                    </span>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 transition-colors">
                      Төслийн нээлтийн үйл ажиллагаа амжилттай боллоо
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;