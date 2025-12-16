const pricingPlans = [
    {
        title: "方案 A",
        subtitle: "全館拍攝租借",
        details: [
            "1. 時段：07:00~22:00",
            "2. 費用：每小時 RM150",
            "3. 適合：廣告、MV、短片、電視劇(需提供腳本/故事)",
            "4. 包場含所有可拍攝區域與道具",
            "5. 客製化服務可另行協議(如:需外燴、需額外打掃等)"
        ]
    },
    {
        title: "方案 B",
        subtitle: "空間租借（活動）",
        details: [
            "1. 適合：講座、分享會、小型聚會",
            "2. 收費：人數、設備、時間",
            "3. 可協助：每人30~50人，依活動屬性調整",
            "4. 可協助提供設備、費用另計"
        ]
    }
];

export const PricingPlans = () => {
    return (
        <section className="px-12 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">價目 & 條件</h2>
                    <p className="text-xl text-text/70">根據您的需求選擇最適合的方案，歡迎洽詢</p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-text/10 hover:border-primary/30"
                        >
                            {/* Plan Header */}
                            <div className="mb-6 pb-6 border-b-2 border-text/10">
                                <h3 className="text-3xl font-bold text-text mb-2">{plan.title}</h3>
                                <p className="text-xl font-medium text-primary">{plan.subtitle}</p>
                            </div>

                            {/* Plan Details */}
                            <ul className="space-y-4">
                                {plan.details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="text-lg text-text/80 leading-relaxed flex items-start"
                                    >
                                        <span className="mr-2 text-primary">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
