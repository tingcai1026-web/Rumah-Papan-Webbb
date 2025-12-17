import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Mail, Search } from 'lucide-react';

export const Navbar = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isVillageOpen, setIsVillageOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between px-12 py-6 bg-bg border-b border-black/5 sticky top-0 z-50">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-3">
                {/* Placeholder Icon/Logo */}
                <div className="relative w-8 h-8">
                    <div className="absolute inset-0 border-2 border-text transform rotate-45"></div>
                    <div className="absolute inset-2 bg-text/10"></div>
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-lg font-bold tracking-widest text-text">班厝故事館</span>
                    <span className="text-[10px] tracking-[0.2em] text-text/80 font-serif">RUMAH PAPAN</span>
                </div>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text">
                <button className="hover:text-primary transition-colors">
                    <Search size={18} />
                </button>

                {/* About Dropdown */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                >
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors py-2">
                        關於班厝 <ChevronDown size={14} className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${isAboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                        <div className="bg-white rounded-xl shadow-lg py-3 w-40 flex flex-col overflow-hidden">
                            <Link to="/about/story" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">故事誌</Link>
                            <Link to="/about/environment" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">環境介紹</Link>
                            <Link to="/about/products" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">農作產品</Link>
                            <Link to="/about/rental" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">場地租借</Link>
                        </div>
                    </div>
                </div>

                {/* Village Dropdown */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsVillageOpen(true)}
                    onMouseLeave={() => setIsVillageOpen(false)}
                >
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors py-2">
                        走進新村 <ChevronDown size={14} className={`transition-transform duration-300 ${isVillageOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${isVillageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                        <div className="bg-white rounded-xl shadow-lg py-3 w-40 flex flex-col overflow-hidden">
                            <Link to="/village/activities" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">活動體驗</Link>
                            <Link to="/village/accommodation" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">住宿體驗</Link>
                            <Link to="/village/skill-exchange" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">技能換宿</Link>
                            <Link to="/village/map" className="px-6 py-3 hover:bg-gray-50 hover:text-primary text-text font-bold text-center transition-colors">觀光地圖</Link>
                        </div>
                    </div>
                </div>
                <a href="#" className="hover:text-primary transition-colors">交通方式</a>
                <a href="#" className="hover:text-primary transition-colors">聯絡我們</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 font-serif text-sm">
                    <span className="font-bold text-text">CH</span>
                    <span className="text-text/30">|</span>
                    <span className="text-text/50 cursor-pointer hover:text-text transition-colors">EN</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 border-1.5 border-text rounded-full hover:bg-text hover:text-bg transition-all duration-300 group">
                    <Mail size={16} className="group-hover:stroke-bg" />
                    <span className="font-medium text-sm">聯絡我們</span>
                </button>
            </div>
        </nav>
    );
};
