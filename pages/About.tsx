import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20">
      
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Бидний тухай</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Монгол орны уур амьсгалын өөрчлөлтийн эсрэг үйл ажиллагааг зохицуулах, олон улсын түвшинд хүлээсэн үүргээ биелүүлэх, ногоон хөгжлийн бодлогыг хэрэгжүүлэхэд дэмжлэг үзүүлэх зорилготой байгууллага юм.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <img src="https://picsum.photos/800/600?nature" alt="Mission" className="rounded-2xl shadow-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Алсын хараа</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Уур амьсгалын өөрчлөлтөд дасан зохицсон, нүүрстөрөгч багатай, ногоон хөгжлийн загвар орон болох.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">Үнэт зүйлс</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Ил тод байдал, хариуцлага</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Мэргэжлийн өндөр ур чадвар</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Инноваци ба тогтвортой байдал</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Манай мэргэжилтнүүд</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all group">
              <div className="h-64 overflow-hidden relative">
                <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 space-x-4">
                  <a href="#" className="text-white hover:text-primary-400"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="text-white hover:text-primary-400"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">{member.position}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;