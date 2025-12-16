import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// 場地租借輪播圖片與文案
const slides = [
    {
        image: "/image/494713951_686469430644056_9088326764906742071_n.jpg",
        title: "班厝全館｜拍攝場景租借",
        description: "廣告、MV、短片、電視劇、紀錄片、學生作品，把下一支作品拍在真正的新村裡。"
    },
    {
        image: "/image/租借活動4.jpg",
        title: "活動空間租借",
        description: "講座、分享會、小型聚會，在充滿故事的空間裡舉辦您的活動。"
    },
    {
        image: "/image/租借活動1.jpg",
        title: "不只是租場地，也是支持新村",
        description: "在班厝拍片或辦活動，讓班達馬蘭被看見，也讓社區更有力量。"
    }
];

export const RentalShowcase = () => {
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
                    className="absolute inset-0 bg-cover bg-[center_35%] transition-all duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-12 left-8 md:left-16 text-white max-w-2xl transition-opacity duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentIndex].title}</h2>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed drop-shadow-md">
                        {slides[currentIndex].description}
                    </p>
                </div>

                {/* Left Navigation Button */}
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

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
