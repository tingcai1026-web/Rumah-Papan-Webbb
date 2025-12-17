import { AccommodationForm } from '../../components/forms/AccommodationForm';

// 住宿體驗資料（預設內容，可由用戶後續修改）
const accommodations = [
    {
        image: "/image/Banner_班厝故事館.jpeg",
        title: "標準雙人房",
        description: "溫馨舒適的雙人房，保留新村老屋的木質結構與溫度，讓你在旅途中也能感受到家的氛圍。房內配備基本寢具、風扇與獨立衛浴空間。",
        details: "房價：RM150/晚（2人）\n設施：雙人床、冷氣/風扇、獨立衛浴、WiFi\n適合：情侶、夫妻、朋友"
    },
    {
        image: "/image/Banner_街景.jpg",
        title: "多人房",
        description: "適合小團體或家庭入住的多人房型，設有上下舖與單人床，在共享空間中交流彼此的旅行故事。適合背包客或想認識新朋友的旅人。",
        details: "房價：每人RM50/晚\n設施：上下舖、共用衛浴、置物櫃、WiFi\n適合：背包客、小團體、家庭"
    },
    {
        image: "/image/Banner_公雞碗.jpg",
        title: "家庭房",
        description: "寬敞的家庭房型，可容納4-6人，適合帶著孩子一起體驗新村生活。房內空間充足，讓一家人都能自在舒適地休息。",
        details: "房價：RM200-250/晚（依人數）\n設施：雙人床+單人床、獨立衛浴、客廳空間\n適合：家庭、親子旅遊"
    },
    {
        image: "/image/Banner_中秋晚會.jpg",
        title: "長期住宿",
        description: "如果你想在班達馬蘭待上一段時間，我們也提供長期住宿方案。週租或月租都有優惠價格，讓你真正融入新村的日常生活節奏。",
        details: "房價：週租/月租另議\n期間：建議至少一週以上\n包含：住宿、部分餐食、在地導覽"
    }
];

const notes = [
    {
        title: "預約與入住時間",
        content: "班厝採預約制，建議至少提前一週詢問房況。一般入住時間為下午，退房為隔日中午前，如需調整可先跟館長討論。"
    },
    {
        title: "房型、人數與收費說明",
        content: "班厝目前為板屋式房間，適合個人、雙人或小家庭入住。標準入住：2人RM150／晚；每多1人：加收RM50／晚。實際可入住人數、床位安排與金額，會依房型與當期狀況，由館方回覆為準。"
    },
    {
        title: "班屋生活小提醒",
        content: "這是一間保留新村味道的板屋，地板、門窗和傢俱都帶著歲月痕跡。請放輕腳步、輕拉門窗，也一起幫忙照顧老物件。"
    },
    {
        title: "公共空間使用",
        content: "客廳、餐桌與院子為共享空間，可閱讀、聊天、寫明信片。晚上10點後建議放低音量，讓彼此都有好好休息的時間。"
    },
    {
        title: "氣候與備品",
        content: "新村鄰近海口，偶爾較潮濕、也會有蚊蟲出沒。房內備有基本寢具與風扇／空調，個人盥洗用品、保暖衣物與防蚊用品建議自備。"
    },
    {
        title: "餐食與過敏",
        content: "若住宿方案含餐，餐點會以私房家常菜為主。如有素食、過敏或其他飲食需求，請在訂房時先告訴我們，好一起調整菜單。"
    },
    {
        title: "拍照與安寧",
        content: "館內展品與牆上照片歡迎欣賞、輕觸即可；如需拍攝他人或鄰居生活，也請先打招呼徵得同意，讓新村的人情味一直保持舒服的距離。"
    }
];

export const Accommodation = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Accommodations Section */}
            <section className="px-12 pt-16 pb-24">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">住宿體驗</h2>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto space-y-16">
                    {accommodations.map((accommodation, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 h-[400px]`}
                        >
                            {/* Accommodation Content */}
                            <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg flex flex-col h-full overflow-hidden">
                                <h3 className="text-2xl md:text-3xl font-bold text-text mb-3 md:mb-4">{accommodation.title}</h3>
                                <p className="text-base md:text-lg text-text/80 leading-relaxed mb-4 md:mb-6 flex-grow overflow-auto">
                                    {accommodation.description}
                                </p>
                                <div className="pt-3 md:pt-4 border-t border-text/10">
                                    <pre className="text-xs md:text-sm text-text/60 leading-relaxed whitespace-pre-line font-sans">
                                        {accommodation.details}
                                    </pre>
                                </div>
                            </div>

                            {/* Accommodation Image */}
                            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg group h-full">
                                <img
                                    src={accommodation.image}
                                    alt={accommodation.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Registration Form Section */}
            <section className="px-12 pb-24">
                <AccommodationForm />
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
