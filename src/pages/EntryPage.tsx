import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

const carouselData = [
    {
        id: 1,
        image: "/image/Image_20250204102256.jpg",
        title: "班厝故事館",
        desc: "走進這裡像走進一個熟悉的客廳，讓遠方的旅人，也在照片與飯桌記憶裡找到回家的位置。"
    },
    {
        id: 2,
        image: "/image/Banner_公雞碗.jpg",
        title: "走進新村",
        desc: "用腳一步一步讀完班達馬蘭，聽老街的故事、看華人新村的日常。"
    },
    {
        id: 3,
        image: "/image/IMG-20251213-WA0015.jpg",
        title: "傳統習俗",
        desc: "農曆正月初九，跟著村裡居民一起準備供品、拜天公，體驗福建人最重要的傳統祭典。"
    },
    {
        id: 4,
        image: "/image/IMG_20240716_165357.jpg",
        title: "技能換宿",
        desc: "白天幫忙打理故事館，夜裡在班達馬蘭星空下交換故事，讓班厝短暫成為你的家。",
        objectPosition: "20% center"
    },
    {
        id: 5,
        image: "/image/Banner_中秋晚會.jpg",
        title: "節慶活動",
        desc: "中秋夜點燈籠、吃月餅，體驗新村傳統的中秋氛圍，感受熱鬧的人情味。"
    },
    {
        id: 6,
        image: "/image/Banner_市集.jpg",
        title: "在地市集",
        desc: "每個月的第一個週末，來逛市集，買好物、吃美食，和班達馬蘭人交換故事。"
    },
    {
        id: 7,
        image: "/image/巴生肉骨茶.png",
        title: "肉骨茶",
        desc: "一鍋從清晨就慢火滾著的肉骨茶，把藥材香、湯氣和巴生人的日常，一起端上班達馬蘭的餐桌。"
    }
];

export const EntryPage = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % carouselData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    const handleEnter = () => {
        navigate('/home');
    };

    // Auto play
    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    // Wheel event
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > 30) {
                // Debounce logic could be added here for smoother feel, 
                // but simple implementation for now
                if (e.deltaY > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel);
        }
        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    // Calculate positions for an arc layout
    // We want the active item in center (angle 0)
    // Neighbors at +/- angle

    return (
        <div
            ref={containerRef}
            className="w-full h-screen bg-bg overflow-hidden flex flex-col items-center justify-center relative select-none"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* Title / Logo hint? */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-50">
                <img src="/image/logo.png" alt="Logo" className="h-12 w-auto grayscale" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>

            {/* Carousel Container */}
            <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center perspective-[1000px]">
                {carouselData.map((item, index) => {
                    const offset = (index - activeIndex + carouselData.length) % carouselData.length;
                    const normalizedOffset = offset > carouselData.length / 2 ? offset - carouselData.length : offset;

                    // We only want 5 items visible: active, +/-1, +/-2
                    if (Math.abs(normalizedOffset) > 2) return null;

                    return { item, index, offset: normalizedOffset };
                })
                    .filter((item): item is { item: typeof carouselData[0]; index: number; offset: number } => item !== null)
                    .sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset)) // Render outer items first (behind)
                    .map(({ item, index, offset }) => {
                        const isActive = index === activeIndex; // Re-introduced isActive variable

                        const opacity = Math.max(0, 1 - Math.abs(offset) * 0.3);
                        const scale = Math.max(0.5, 1 - Math.abs(offset) * 0.15);
                        const xOffset = offset * 260; // Reduced spacing to pull away from edges

                        // To get the "Fan" look from the sketch:
                        // They are rotated Z (tilted)
                        // Center is straight (0 deg)
                        // Left is rotated -10deg, Right +10deg

                        // Logic: Side items use fanRotation. Active item overrides this in inner divs.
                        const fanRotation = isActive ? 0 : offset * 8;

                        // Lift the center item up (-30px) and drop the others down to create separation
                        const fanY = isActive ? -30 : Math.abs(offset) * 30;

                        // Allow slight overlap for the center item parts
                        // The container for the pair is overlapping with neighbors?
                        // No, the pair parts (Image & Text) should overlap.

                        return (
                            <div
                                key={item.id}
                                className={`absolute transition-all duration-700 ease-out flex items-center justify-center ${Math.abs(offset) > 2 ? 'opacity-0 pointer-events-none' : ''}`}
                                style={{
                                    transform: `translateX(${xOffset * 0.65}px) translateY(${fanY}px) rotate(${fanRotation}deg) scale(${scale})`,
                                    zIndex: 10 - Math.abs(offset),
                                    opacity: opacity
                                }}
                            >
                                {/* Polaroid Card - Image */}
                                <div
                                    className={`bg-white p-3 pb-8 shadow-xl w-[280px] h-[360px] md:w-[320px] md:h-[400px] flex flex-col items-center relative transition-transform duration-500 hover:scale-105
                                    ${isActive ? 'transform -rotate-6 -translate-y-4 z-20' : ''}`} // Active: Special tilt/offset. Inactive: Inherit fan rotation.
                                    style={isActive ? { marginRight: '-15px' } : {}} // Overlap only if active
                                >
                                    <div className="w-full h-full bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            style={{ objectPosition: (item as any).objectPosition || 'center' }} // Position support
                                        />
                                    </div>
                                </div>

                                {/* Polaroid Card - Text */}
                                <div
                                    className={`bg-white p-6 shadow-xl w-[280px] h-[360px] md:w-[320px] md:h-[400px] flex flex-col justify-center items-center text-center relative z-10 transition-transform duration-500 hover:z-30 hover:scale-105
                                    ${isActive ? 'transform rotate-3 translate-y-2' : ''}`} // Active: Special tilt/offset. Inactive: Inherit fan rotation (wrapper).
                                    style={{ marginLeft: '-15px' }}
                                >
                                    <h3 className="text-2xl font-bold text-text mb-4 font-serif">{item.title || "班厝"}</h3>
                                    <p className="text-text/80 leading-relaxed font-sans text-sm md:text-base line-clamp-6">
                                        {item.desc}
                                    </p>
                                    <div className="mt-6 w-12 h-1 bg-primary/20 rounded-full"></div>
                                    <div className="mt-2 text-xs text-text/40 font-mono">EST. 2024</div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {/* Navigation Buttons for manual control */}
            <div className="absolute top-1/2 left-4 md:left-12 z-20 -translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className="w-16 h-16 flex items-center justify-center rounded-full border border-text/60 hover:bg-text hover:text-white hover:scale-110 transition-all duration-300 text-text group"
                >
                    <ArrowLeft size={24} strokeWidth={1} className="group-hover:stroke-2 transition-all" />
                </button>
            </div>

            <div className="absolute top-1/2 right-4 md:right-12 z-20 -translate-y-1/2">
                <button
                    onClick={handleNext}
                    className="w-16 h-16 flex items-center justify-center rounded-full border border-text/60 hover:bg-text hover:text-white hover:scale-110 transition-all duration-300 text-text group"
                >
                    <ArrowRight size={24} strokeWidth={1} className="group-hover:stroke-2 transition-all" />
                </button>
            </div>

            {/* Enter Button */}
            <div className="absolute bottom-12 md:bottom-16 z-20">
                <button
                    onClick={handleEnter}
                    className="px-10 py-3 md:px-12 md:py-4 bg-transparent border-2 border-text/80 text-text rounded-full 
                        text-lg font-bold tracking-widest hover:bg-text hover:text-white transition-all duration-300
                        hover:scale-105 active:scale-95 shadow-lg group flex items-center gap-2"
                >
                    進入網站
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 flex gap-2">
                {carouselData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-text w-6' : 'bg-text/30 hover:bg-text/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};
