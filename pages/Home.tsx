import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Activity, Users, Globe } from 'lucide-react';
import { LATEST_NEWS, MOCK_PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const featuredProjects = Object.values(MOCK_PROJECTS).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transform scale-105"
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")' }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-primary-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-400 text-primary-200 text-sm font-semibold mb-6 backdrop-blur-md">
              Монгол улсын тогтвортой хөгжлийн төлөө
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Уур амьсгалын өөрчлөлт ба <span className="text-primary-400">Ногоон ирээдүй</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Бид байгаль орчныг хамгаалах, нүүрстөрөгчийн ялгарлыг бууруулах, дасан зохицох чадавхыг бэхжүүлэх замаар Монгол орны тогтвортой ирээдүйг цогцлооно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects/carbon-registry" className="inline-flex justify-center items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                Төслүүдтэй танилцах
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about/us" className="inline-flex justify-center items-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold rounded-lg transition-all">
                Бидний тухай
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features Strip */}
      <section className="bg-white dark:bg-slate-800 py-12 border-b border-gray-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">15+</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Идэвхтэй төсөл</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">2.4M</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">CO2 бууруулалт (тонн)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">5000+</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Хамрагдсан иргэд</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">21</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Аймагт хүрсэн</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Онцлох төслүүд</h2>
              <p className="text-slate-600 dark:text-slate-400">Бидний хэрэгжүүлж буй гол санаачилгууд</p>
            </div>
            <Link to="/projects/carbon-registry" className="hidden sm:flex text-primary-600 hover:text-primary-700 font-medium items-center">
              Бүгдийг үзэх <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-primary-700 dark:text-primary-400 shadow-sm">
                    {project.status === 'Ongoing' ? 'Хэрэгжиж байна' : 'Төлөвлөсөн'}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.summary}
                  </p>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm mt-auto">
                    Дэлгэрэнгүй <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Мэдээ, мэдээлэл</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_NEWS.map((news) => (
              <article key={news.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">{news.category}</span>
                    <span className="text-xs text-slate-400">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                    {news.excerpt}
                  </p>
                  <Link to={`/news/org`} className="text-sm font-medium text-slate-900 dark:text-white underline decoration-gray-300 underline-offset-4 hover:decoration-primary-500 transition-all">
                    Үргэлжлүүлж унших
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;