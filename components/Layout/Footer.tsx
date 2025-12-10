import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="font-bold text-white uppercase text-sm tracking-wide leading-tight">
                Mongolia Climate<br/>& Carbon Projects
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Монгол орны байгаль орчин, уур амьсгалын өөрчлөлтийн чиглэлээр хэрэгжиж буй төсөл, хөтөлбөрүүдийн нэгдсэн мэдээллийн сан.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span>Улаанбаатар хот, Чингэлтэй дүүрэг, Нэгдсэн үндэстний гудамж 5/2</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>+976 11 32XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>info@climate-projects.mn</span>
              </div>
            </div>
          </div>

          {/* Column 2: Projects */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Төсөлүүд</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.find(n => n.id === 'projects')?.children?.slice(0, 5).map(child => (
                <li key={child.id}>
                  <Link to={child.path || '#'} className="text-sm hover:text-primary-400 transition-colors line-clamp-1">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Холбоос</h3>
            <ul className="space-y-2">
              <li><Link to="/transparency/glass-accounts" className="text-sm hover:text-primary-400 transition-colors">Шилэн данс</Link></li>
              <li><Link to="/about/team" className="text-sm hover:text-primary-400 transition-colors">Манай баг</Link></li>
              <li><Link to="/about/faq" className="text-sm hover:text-primary-400 transition-colors">Түгээмэл асуултууд</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary-400 transition-colors">Холбоо барих</Link></li>
              <li><Link to="/news/org" className="text-sm hover:text-primary-400 transition-colors">Мэдээ мэдээлэл</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Мэдээлэл авах</h3>
            <p className="text-sm text-slate-400 mb-4">
              Шинэ мэдээ, тайлангуудыг цаг алдалгүй авахыг хүсвэл бүртгүүлнэ үү.
            </p>
            <form className="flex mb-6">
              <input 
                type="email" 
                placeholder="И-мэйл хаяг" 
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:border-primary-500 text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md text-white text-sm font-medium transition-colors">
                Илгээх
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mongolia Climate Projects. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;