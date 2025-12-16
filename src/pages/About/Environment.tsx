export const Environment = () => {
    const environmentData = [
        {
            image: "/image/彩虹小徑.jpeg",
            title: "彩虹小徑",
            description: "走過彩色步道，推開鐵門，就是班厝一天會發生很多故事的地方。"
        },
        {
            image: "/image/客廳_交誼廳.jpg",
            title: "客廳／交誼廳",
            description: "牆上的看板和老照片留下了班村的腳印；早上是早餐桌，晚上常常又成說故事的現場。"
        },
        {
            image: "/image/房間.jpg",
            title: "住宿房間",
            description: "簡單乾淨的板屋房間，讓你的床，真的搬進新村生活裡。"
        },
        {
            image: "/image/菜園.jpeg",
            title: "菜園",
            description: "菜園裡種滿蔬果和艾草，端上桌的每一道菜，大多都從這裡長出來。"
        },
        {
            image: "/image/前院涼亭.jpeg",
            title: "前院涼亭",
            description: "棚下是最熱鬧的角落，蔗物、喝茶、聊天、辦活動，都從這裡開始。"
        },
        {
            image: "/image/輪胎地標.jpeg",
            title: "彩繪輪胎",
            description: "親手彩繪的彩色輪胎，是「班厝故事館」入口活招牌，也是大家最愛停下來拍照的風景。"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="px-12 py-16 md:py-24 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-text">環境介紹</h1>
            </section>

            {/* Cards Grid */}
            <section className="px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {environmentData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Card Image */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-text">{item.title}</h3>
                                <p className="text-lg text-text/80 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
