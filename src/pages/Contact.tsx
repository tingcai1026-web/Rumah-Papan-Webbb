import { ContactForm } from '../components/contact/ContactForm';
import { Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
    const [isHoursExpanded, setIsHoursExpanded] = useState(false);
    return (
        <div className="min-h-screen bg-background">
            {/* 標題區塊 */}
            <section className="px-12 pt-16 pb-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">聯絡我們</h1>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto">
                        有任何問題或建議嗎？歡迎與我們聯繫，我們很樂意為您服務
                    </p>
                </div>
            </section>

            {/* 創辦人介紹區塊 */}
            <section className="px-12 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            {/* 左側：創辦人照片 */}
                            <div className="flex-shrink-0">
                                <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/image/RFai.png"
                                        alt="周鴻輝"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* 右側：創辦人資訊 */}
                            <div className="flex-grow flex flex-col justify-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">周鴻輝</h2>

                                <p className="text-lg md:text-xl text-text/80 leading-relaxed mb-8">
                                    我出生於巴生班達馬蘭新村，擁有馬來西亞旅遊局執牌導遊資格，長年投入文化教育與在地體驗，深信「走進地方，就理解自己的土地」。2016年發起巴生老街導覽並成立中文導覽團隊 Jalan-jalan Klang；2020年創立土特產平台 JjK Store 推廣五號公路沿線好物；其後在家鄉打造班達馬蘭新村故事館「班厝」，以走讀、展覽與教育行動為老社區點燈。2022年獲聘巴生旅遊大使，持續用故事連結人與地方。
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-text mb-2">創辦人</h3>
                                    <p className="text-lg text-text/70">
                                        巴生·班達馬蘭新村人｜文化導覽人｜地方創生實踐者
                                    </p>
                                </div>

                                {/* 社群媒體連結 */}
                                <div className="flex gap-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href="https://wa.me/60123456789"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 主要內容區 */}
            <section className="px-12 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 左側：聯絡資訊 */}
                    <div className="space-y-8">
                        {/* 簡介 */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg">
                            <h2 className="text-3xl font-bold text-text mb-4">班厝故事館</h2>
                            <p className="text-lg text-text/80 leading-relaxed mb-6">
                                一間為班達馬蘭存放記憶的厝。<br />
                                在這裡，我們用照片、文字與日常器物，保存新村的人情與歷史。<br />
                                歡迎來班厝坐坐，聽故事，也分享你的故事。
                            </p>
                        </div>

                        {/* 聯絡方式 */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg">
                            <h3 className="text-2xl font-bold text-text mb-6">聯絡方式</h3>
                            <div className="space-y-5">
                                {/* 地址 */}
                                <div>
                                    <h4 className="font-bold text-text mb-1">地址</h4>
                                    <p className="text-text/70">
                                        班厝故事館 Pandamaran, Klang, Selangor, Malaysia
                                    </p>
                                </div>

                                {/* 電話 */}
                                <div>
                                    <h4 className="font-bold text-text mb-1">電話</h4>
                                    <p className="text-text/70">+60 16-219 8920</p>
                                </div>

                                {/* Email */}
                                <div>
                                    <h4 className="font-bold text-text mb-1">Email</h4>
                                    <p className="text-text/70">rumahpapanklang@gmail.com</p>
                                </div>

                                {/* 開放時間 */}
                                <div>
                                    <button
                                        onClick={() => setIsHoursExpanded(!isHoursExpanded)}
                                        className="w-full text-left group"
                                    >
                                        <h4 className="font-bold text-text mb-1 flex items-center justify-between">
                                            開放時間
                                            <ChevronDown
                                                className={`w-5 h-5 text-primary transition-transform duration-300 ${isHoursExpanded ? 'rotate-180' : ''}`}
                                            />
                                        </h4>
                                        <p className="text-text/70">週一至週日：10:00 - 18:00</p>
                                    </button>

                                    {/* 展開的時間表 */}
                                    <div className={`overflow-hidden transition-all duration-300 ${isHoursExpanded ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                                        <div className="space-y-2 text-text/70 text-sm">
                                            <div className="flex justify-between py-1 border-b border-text/10">
                                                <span>星期一</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-text/10">
                                                <span>星期二</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-text/10">
                                                <span>星期三</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-text/10">
                                                <span>星期四</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-text/10">
                                                <span>星期五</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                            <div className="flex justify-between py-1 border-b border-text/10">
                                                <span>星期六</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                            <div className="flex justify-between py-1">
                                                <span>星期日</span>
                                                <span>10:00–18:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右側：聯絡表單 */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* 地圖區塊（選用） */}
            <section className="px-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
                            尋找我們
                        </h2>
                        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0157289847626!2d101.38968831475613!3d3.0157289979729144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnNTYuNSJOIDEwMcKwMjMnMjIuOSJF!5e0!3m2!1sen!2smy!4v1634567890123"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="班厝故事館位置"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};
