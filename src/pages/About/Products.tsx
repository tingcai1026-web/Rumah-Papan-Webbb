export const Products = () => {
    const productsData = [
        {
            image: "/image/桑葉茶包.jpeg",
            title: "桑葉茶包系列",
            description: "以樹葉曬乾製成無咖啡因，桑葉搭配藥材，調成五種配方，消脂、明目養肝、潤肺養顏、清熱止咳、開胃解膩，適合每天當涼茶喝。"
        },
        {
            image: "/image/肉骨茶湯包.jpeg",
            title: "班厝肉骨茶包",
            description: "以胡椒、蒜頭與中藥材調製，一包可煮一公斤肉或素料，在家就能燉出巴生在地人最熟悉的暖身熱湯。"
        },
        {
            image: "/image/咖啡豆五粒子.png",
            title: "咖啡豆五粒子",
            description: "咖啡豆五粒子：把咖啡豆、相思豆收進小布袋，搭配蠟染布圖案，一邊拋接玩五粒子，一邊感受巴生咖啡與在地文化的故事"
        },
        {
            image: "/image/艾草香包.png",
            title: "艾草香包",
            description: "艾草香包：採自班厝菜園的新鮮艾草曬乾製成，帶淡淡草本香氣，可掛門口或放在包包裡，驅蚊、防穢氣，也多一份安心感。"
        },
        {
            image: "/image/九層塔青醬.jpeg",
            title: "九層塔青醬",
            description: "九層塔的香氣在鍋裡慢慢醒來，在班厝，一匙青醬，就是故事開始變好吃的瞬間。"
        },
        {
            image: "/image/木鱉果香皂.jpeg",
            title: "木鱉果香皂",
            description: "木鱉果的香氣被揉進香皂裡，洗掉一身疲憊，也把新村的陽光留在手心。"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="px-12 py-16 md:py-24 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-text">農作產品</h1>
            </section>

            {/* Cards Grid */}
            <section className="px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((item, index) => (
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
