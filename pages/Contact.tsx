import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Холбоо барих
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Та манай үйл ажиллагаатай холбоотой санал хүсэлт, асуултаа доорх хэлбэрээр илгээнэ үү.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Зурвас илгээх</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Нэр</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:text-white transition-all" placeholder="Таны нэр" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">И-мэйл</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:text-white transition-all" placeholder="name@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Сэдэв</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:text-white transition-all" placeholder="Зурвасын сэдэв" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Зурвас</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:text-white transition-all" placeholder="Таны зурвас..."></textarea>
              </div>
              <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                Илгээх <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Хаяг</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Монгол улс, Улаанбаатар хот 15160,<br/>
                    Чингэлтэй дүүрэг, Нэгдсэн үндэстний гудамж 5/2,<br/>
                    Засгийн газрын II байр
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Утас</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">+976 11 32XXXX</p>
                  <p className="text-slate-400 text-sm">Даваа - Баасан, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">И-мэйл</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">info@climate-projects.mn</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-200 dark:bg-slate-800 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.284279563223!2d106.9157233157582!3d47.92044897920706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692437636a00b%3A0x2863116d820b327b!2sGovernment%20Palace!5e0!3m2!1sen!2smn!4v1620000000000!5m2!1sen!2smn" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;