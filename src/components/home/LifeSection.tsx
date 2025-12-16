import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Lai Sook Yin",
        content: "很用心守護新村與文化的地方，介紹歷史又常辦活動，來到這裡走走，很快就會喜歡上這裡。",
        stars: 5,
    },
    {
        name: "Alexis",
        content: "身為外地人，也能透過導覽深入理解新村的歷史變化與在地文化，非常推薦給想認識大馬的旅人。",
        stars: 4,
    },
    {
        name: "麗冰",
        content: "三年苗菜跨一切開始起步，綠意盎然，人情味... 這裡像是回家，感受到創辦人默默守護。",
        stars: 5,
    }
];

export const LifeSection = () => {
    return (
        <section className="px-12 py-16 bg-bg">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-text tracking-wider">
                    生活 <span className="text-text/40">×</span> 在地 <span className="text-text/40">×</span> 新村
                </h2>
                <p className="text-text/70 max-w-2xl mx-auto">
                    在這裡馬蘭新村，我們聽故事、寫故事與人情。
                    <br />
                    留住一個個正在發生的華人新村日常。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-sm relative">
                        {/* Speech bubble tail effect could be added if using SVG or pseudo-element, skipping for standard card look matching screenshot */}
                        <div className="flex gap-1 mb-4 text-[#F1592C]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < item.stars ? "currentColor" : "none"} strokeWidth={i < item.stars ? 0 : 2} className={i < item.stars ? "" : "text-gray-300"} />
                            ))}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                        <p className="text-text/80 text-sm leading-relaxed">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
