// 活動體驗資料
const activities = [
    {
        image: "/image/592141208_851551740802490_403917592445625865_n.jpg",
        title: "走村導覽",
        description: "跟從班厝出發，跟著館主走進班達馬蘭新村，從雞公碗地標、漢白玉大佛，到老店招牌、板屋巷弄，一路聽導覽說起新村的遷村歷史、名人故事與在地美食。兩個多小時，把你從「路過的遊客」慢慢帶成「懂一點班村的人」。",
        details: "時間：每週六、日 14:00-16:00\n費用：Free/人\n人數：50人"
    },
    {
        image: "/image/初九拜天公.png",
        title: "拜天公",
        description: "正月初九，天公桌擺到巷子口，甘蔗、供品、鞭炮和祝福一字排開。班厝帶你看儀式背後的移民記憶、信仰和家族故事，讓你第一次在新村親眼看見「拜天公」，而不是只在相片裡聽說。",
        details: "時間：農曆正月初九\n費用：免費參與\n注意：需尊重宗教儀式"
    },
    {
        image: "/image/Banner_技能換宿.jpg",
        title: "中秋晚會",
        description: "提燈籠、聽故事、看孩子在院子裡跑來跑去，桌上是月餅與班達馬蘭新村私房菜。班厝的中秋，不只看月亮，也讓你在月光下認識一整群新朋友，把「回家過節」延伸到另一條村。",
        details: "時間：不定期開課\n費用：RM50-150/人\n內容：依工坊主題而定"
    },
    {
        image: "/image/Banner_市集.jpg",
        title: "新村市集",
        description: "配合雪蘭莪新村節，班厝把新村美食、手作、表演和導覽一次集合。你可以在市集中吃肉骨茶、買在地小物、聽故事，也順便認識其他 76 個新村正在發生的事。",
        details: "時間：每月第一個週末 09:00-13:00\n費用：免費入場\n內容：農產品、手作、美食"
    },
    {
        image: "/image/Banner_公雞碗.jpg",
        title: "班厝工作坊",
        description: "不定期邀請在地職人、藝術家和旅人，在班厝辦小型講座、剪片分享、紙藝或手作課。你可以帶著問題來、帶著作品走，也順便在客廳的長桌邊交幾個新朋友。",
        details: "時間：不定期開課\n費用：RM50-150/人\n內容：依工坊主題而定"
    }
];

const notes = [
    {
        title: "報名與聯絡",
        content: "所有活動需提前報名，請透過 FB、IG、WhatsApp 或電話聯絡班厝，確認檔期與人數。"
    },
    {
        title: "穿著與裝備",
        content: "建議穿著輕便服裝與舒適鞋子，戶外活動請自備防曬用品、飲用水，雨天請攜帶雨具。"
    },
    {
        title: "飲食與禁忌",
        content: "部分活動會提供茶點或餐食，如有特殊飲食需求（素食、過敏等）請提前告知。"
    },
    {
        title: "尊重在地居民與環境",
        content: "新村是真實的生活場域，請降低音量、不隨意進入私人住宅、不亂丟垃圾，共同維護社區環境。"
    },
    {
        title: "天候與取消政策",
        content: "若遇天候不佳或不可抗力因素，班厝保留活動調整或取消的權利，會提前通知並協調改期或退費事宜。"
    }
];

export const ActivityExperience = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Village Banner Image */}
            <section className="px-12 pt-16 pb-16">
                <div className="w-full h-[400px] rounded-3xl overflow-hidden">
                    <img
                        src="/image/Banner_街景.jpg"
                        alt="班達馬蘭新村街景"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Activities Section */}
            <section className="px-12 pb-24">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">活動體驗</h2>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto space-y-16">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 h-[400px]`}
                        >
                            {/* Activity Content */}
                            <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg flex flex-col h-full overflow-hidden">
                                <h3 className="text-2xl md:text-3xl font-bold text-text mb-3 md:mb-4">{activity.title}</h3>
                                <p className="text-base md:text-lg text-text/80 leading-relaxed mb-4 md:mb-6 flex-grow overflow-auto">
                                    {activity.description}
                                </p>
                                <div className="pt-3 md:pt-4 border-t border-text/10">
                                    <pre className="text-xs md:text-sm text-text/60 leading-relaxed whitespace-pre-line font-sans">
                                        {activity.details}
                                    </pre>
                                </div>
                            </div>

                            {/* Activity Image */}
                            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg group h-full">
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${index === 1 ? 'scale-150' : ''}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
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
