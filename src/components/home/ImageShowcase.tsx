import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// 您可以在這裡新增、修改輪播圖片與文案
const slides = [
    {
        image: "/image/Banner_公雞碗.jpg",
        title: "雞公碗",
        description: "巴生最大的華人新村入口，用一碗白飯和雞公碗，向每個來訪的人打招呼。"
    },
    {
        image: "/image/Banner_班厝故事館.jpeg",
        title: "班厝故事館",
        description: "在這裡，看見新村的過去、現在與未來。"
    },
    {
        image: "/image/Banner_街景.jpg",
        title: "班達馬蘭街景",
        description: "海鮮店、肉骨茶與老招牌，把班達馬蘭最日常的生活節奏排成街景"
    },
    {
        image: "/image/Banner_技能換宿.jpg",
        title: "技能換宿",
        description: "用你的專長交換住宿，深入體驗在地生活。"
    },
    {
        image: "/image/Banner_市集.jpg",
        title: "在地市集",
        description: "一攤攤新村美食與手作，把人情味和好味道一起打包，讓你帶回家"
    },
    {
        image: "/image/Banner_中秋晚會.jpg",
        title: "節慶活動",
        description: "中秋晚會、新春團拜，凝聚村民情感的重要時刻。"
    }
];

export const ImageShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="px-12 py-12">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
                {/* Background Image */}
                <div
                    className={`absolute inset-0 bg-cover transition-all duration-700 group-hover:scale-105 ${currentIndex === 2 ? 'bg-bottom' : 'bg-center'
                        }`}
                    style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-12 left-8 md:left-16 text-white max-w-2xl transition-opacity duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentIndex].title}</h2>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed drop-shadow-md">
                        {slides[currentIndex].description}
                    </p>
                </div>

                {/* Left Navigation Button - Hidden on first slide */}
                {currentIndex > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all z-20"
                    >
                        <ChevronLeft size={32} />
                    </button>
                )}

                {/* Right Navigation Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all z-20"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Dots Indicator - Centered */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
