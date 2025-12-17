import { SkillExchangeForm } from '../../components/forms/SkillExchangeForm';

// 技能換宿資料（預設內容，可由用戶後續修改）
const exchanges = [
    {
        image: "/image/Banner_技能換宿.jpg",
        title: "社群經營與內容創作",
        description: "協助班厝經營社群媒體、撰寫貼文、拍攝照片或影片，把班達馬蘭的故事分享給更多人。如果你擅長文案、攝影或剪輯，這裡會是你發揮創意的好地方。",
        details: "工作時數：每日4-6小時\n提供內容：住宿、簡單伙食\n適合：文案創作、攝影、影片剪輯愛好者"
    },
    {
        image: "/image/Banner_街景.jpg",
        title: "導覽解說與活動協助",
        description: "陪同訪客進行新村導覽、協助舉辦文化活動或工作坊。你會學到如何說故事、帶領團體，也能深入認識在地文化與歷史。",
        details: "工作時數：每日4-6小時\n提供內容：住宿、餐食、導覽訓練\n適合：喜歡與人互動、對文化導覽有興趣者"
    },
    {
        image: "/image/Banner_公雞碗.jpg",
        title: "環境維護與菜園照顧",
        description: "協助館內清潔、整理菜園、澆水施肥，或是幫忙修繕老屋。如果你喜歡動手做、親近土地，這裡能讓你體驗最真實的新村生活節奏。",
        details: "工作時數：每日4-6小時\n提供內容：住宿、伙食、園藝技能學習\n適合：喜歡戶外工作、園藝或手作者"
    },
    {
        image: "/image/Banner_中秋晚會.jpg",
        title: "廚藝交流與飲食文化",
        description: "協助準備餐點、學習在地料理，或是分享你家鄉的味道。在廚房裡，你會認識新村的飲食文化，也能把自己的廚藝帶進班厝的餐桌。",
        details: "工作時數：每日4-6小時\n提供內容：住宿、伙食、廚藝交流\n適合：對烹飪有興趣、願意學習在地料理者"
    }
];

const notes = [
    {
        title: "申請方式與基本條件",
        content: "請先透過Facebook／WhatsApp自我介紹，簡單說明：你是誰、想來多久、會什麼、希望在班厝學到什麼。一般建議停留至少2週，較能進入生活節奏。"
    },
    {
        title: "工作內容與時間分配",
        content: "每天約4–6小時協助菜園、環境整理、接待、活動或影音文字等工作，其餘時間自由運用。實際安排會依當期活動與你的專長一起討論。"
    },
    {
        title: "住宿與餐食",
        content: "提供基礎住宿空間及簡單伙食，可能會一起備菜、煮飯、洗碗，像在家裡分工那樣。若有特別飲食需求，記得事先告知。"
    },
    {
        title: "適合什麼樣的你",
        content: "喜歡與人相處、不怕動手、願意主動幫忙，對社區、華人文化或永續生活有興趣，都很適合來。不需要完美的履歷，只需要誠實和願意互相學習的心。"
    },
    {
        title: "尊重在地與安全",
        content: "請尊重新村居民與宗教信仰，拍攝他人前先徵詢、活動期間遵守安全與環保規範。有任何不舒服或疑問，都可以隨時找館主或夥伴。"
    },
    {
        title: "作品與素材使用",
        content: "若你在換宿期間協助拍攝照片、影片或撰寫文字，可能會在班厝或相關平台使用。若有個人作品不希望公開，也可以事先說明，一起討論最佳方式。"
    }
];

export const SkillExchange = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Skill Exchange Section */}
            <section className="px-12 pt-16 pb-24">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">技能換宿</h2>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto space-y-16">
                    {exchanges.map((exchange, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 h-[400px]`}
                        >
                            {/* Exchange Content */}
                            <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg flex flex-col h-full overflow-hidden">
                                <h3 className="text-2xl md:text-3xl font-bold text-text mb-3 md:mb-4">{exchange.title}</h3>
                                <p className="text-base md:text-lg text-text/80 leading-relaxed mb-4 md:mb-6 flex-grow overflow-auto">
                                    {exchange.description}
                                </p>
                                <div className="pt-3 md:pt-4 border-t border-text/10">
                                    <pre className="text-xs md:text-sm text-text/60 leading-relaxed whitespace-pre-line font-sans">
                                        {exchange.details}
                                    </pre>
                                </div>
                            </div>

                            {/* Exchange Image */}
                            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg group h-full">
                                <img
                                    src={exchange.image}
                                    alt={exchange.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Application Form Section */}
            <section className="px-12 pb-24">
                <SkillExchangeForm />
            </section>

            {/* Notes Section */}
            <section className="px-12 pb-24">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">注意事項</h2>

                    <div className="space-y-6">
                        {notes.map((note, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-bold text-text mb-2">{note.title}</h4>
                                    <p className="text-lg text-text/70 leading-relaxed">{note.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
