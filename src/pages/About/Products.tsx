export const Products = () => {
    const productsData = [
        {
            image: "/image/product1.jpg",
            title: "有機蔬菜",
            description: "班厝種植的有機蔬菜，不使用化學農藥，採用永續農法，提供新鮮健康的食材給社區和訪客。"
        },
        {
            image: "/image/product2.jpg",
            title: "香草植物",
            description: "庭園中種植多種香草植物，包括薄荷、羅勒、檸檬草等，用於烹飪和製作天然飲品。"
        },
        {
            image: "/image/product3.jpg",
            title: "熱帶水果",
            description: "馬來西亞特有的熱帶水果，如香蕉、木瓜、芒果等，在班厝的果園中茁壯成長。"
        },
        {
            image: "/image/product4.jpg",
            title: "手作醬料",
            description: "使用自家種植的香草和辛香料製作的天然醬料，保留傳統風味。"
        },
        {
            image: "/image/product5.jpg",
            title: "天然酵素",
            description: "利用果皮和廚餘發酵製成的環保清潔酵素，實踐永續生活理念。"
        },
        {
            image: "/image/product6.jpg",
            title: "在地伴手禮",
            description: "精選班達馬蘭新村特色產品，讓訪客帶走一份新村的記憶。"
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
