import { Facebook, Instagram, Phone } from 'lucide-react'; // Phone icon is close to WhatsApp visually 

export const Footer = () => {
    return (
        <footer className="bg-footer text-gray-400 px-12 py-16 mt-12 rounded-t-[3rem] mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        {/* White Logo Placeholder */}
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 border-2 border-white transform rotate-45"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white tracking-widest">班厝故事館</span>
                            <span className="text-[10px] tracking-[0.2em]">RUMAH PAPAN</span>
                        </div>
                    </div>
                    <p className="text-sm">在班馬蘭新村，收集故事和人情的一間厝。</p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Phone size={20} /></a>
                    </div>
                </div>

                {/* Region */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold mb-4">版權區域</h4>
                    <p>Malaysia Selangor Klang</p>
                </div>

                {/* Phone */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold mb-4">行動電話</h4>
                    <p>+60 16-219 8920</p>
                </div>

                {/* Email/Address */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold mb-4">Email</h4>
                    <p>rumahpapanklang@gmail.com</p>

                    <h4 className="text-white font-bold mt-6 mb-4">地址</h4>
                    <p className="text-sm leading-relaxed">
                        124, Jalan Kemas, 42000 Pelabuhan Klang, Klang, Malaysia, 42000
                    </p>
                </div>
            </div>
        </footer>
    );
};
