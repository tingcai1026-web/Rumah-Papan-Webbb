import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// ==========================================
// 內容編輯區 (Content Editing Area)
// ==========================================
export const StoryContent: Record<string, any> = {
    "關於班厝": {
        intro: {
            title: <>在班達馬蘭新村裡生活，<br />而不是只是路過</>,
            description: "班厝故事館把走村導覽、旅宿體驗、技能換宿連在一起，不只是帶你看景點，而是陪你跟著村民的日常、味道和記憶，一起讓班達馬蘭的新村故事繼續活下去。",
            images: [
                "/image/mmexport1741436105250.jpg",
                "/image/WhatsApp Image 2023-02-25 at 6.15.06 PM.jpeg",
                "/image/IMG_20250119_154541.jpg"
            ]
        },
        flip: {
            image: "/image/12.jpg",
            // 您可以在這裡調整圖片位置 (e.g., 'center', 'top', 'bottom', 'left', 'right')
            // 或者使用縮放 (e.g., transform: 'scale(1.2)')
            imageStyle: { objectPosition: 'center', objectFit: 'cover', transform: 'scale(1.5)' },
            frontTitle: "班厝故事館",
            backTitle: <>班厝故事館白天是班達馬蘭新村的博物館，展示班達馬蘭的歷史、飲食、信仰與移民記憶；也是走村導覽的起點，帶著大家從館內走到街口、廟宇與市場。</>
        },
        stat: {
            value: 100,
            unit: "%",
            subtext: "親身體驗",
            description: "每一場走村、每一次旅宿、每一次技能換宿，都讓參與的人帶走一個真實的新村故事。"
        },
        slogan: {
            title: <>從一句「呷霸未？」<br />開始的班達馬蘭故事館</>,
            clickHint: "點擊查看",
            hiddenImage: "/image/IMG_20250125_135951.jpg"
        },
        banner: {
            title: "班達馬蘭新村",
            description: "早上照顧菜園，午後帶人走村，晚上在客廳吃飯聊天。輪播的每一張照片，都是班厝最日常，也最捨不得的風景。",
            images: [
                "/image/mmexport1741436086977.jpg",
                "/image/IMG-20250122-WA0010.jpg"
            ]
        }
    },
    "肉骨茶": {
        intro: {
            title: <>一碗肉骨茶，<br />傳承三代的記憶</>,
            description: "在班達馬蘭，肉骨茶不僅是早餐，更是一種生活儀式。濃郁的藥材香氣飄散在巷弄間，連結著歸鄉遊子與在地居民的情感。",
            images: [
                "https://images.unsplash.com/photo-1542384557-0824d9071479?q=80&w=2800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1626202158866-9b552e646f90?q=80&w=2800&auto=format&fit=crop"
            ]
        },
        flip: {
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2800&auto=format&fit=crop",
            frontTitle: "古早味肉骨茶",
            backTitle: <>堅持使用傳統炭火熬煮，<br />保留最原始的風味。</>
        },
        stat: {
            value: 50,
            unit: "+",
            subtext: "",
            description: "新村內聚集了超過 50 家肉骨茶店，密度之高，全馬罕見，是名副其實的肉骨茶之鄉。"
        },
        slogan: {
            title: <>「肉骨茶」<br />不只是茶，是人情味</>,
            clickHint: "點擊聞香",
            hiddenImage: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=2800&auto=format&fit=crop"
        },
        banner: {
            title: "尋味之旅",
            description: "跟著香味走，每一家肉骨茶都有自己的獨門秘方和故事。來班達馬蘭，開啟你的尋味之旅。",
            images: [
                "https://images.unsplash.com/photo-1512054502232-1b078006eb4c?q=80&w=2800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2800&auto=format&fit=crop"
            ]
        }
    }
    // 您可以在此處繼續新增其他關鍵字 (e.g., "技能換宿": { ... })
};

// ==========================================
// 組件區 (Component Logic)
// ==========================================

// Card 1: Intro with Carousel
export const IntroCard = ({ content }: { content: any }) => {
    const { title, description, images } = content;
    const [idx, setIdx] = useState(0);

    const next = () => setIdx((p) => (p + 1) % images.length);
    const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="p-8 flex-1 md:flex-[2] flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-text/70 text-sm leading-relaxed">{description}</p>
            </div>
            <div className="flex-1 md:flex-[3] relative h-64 md:h-full p-8 md:p-12">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                    {images.map((img: string, i: number) => (
                        <img
                            key={i}
                            src={img}
                            alt="Intro"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                    <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                        <button onClick={prev} className="bg-white p-2 rounded-lg hover:bg-gray-100 shadow-sm"><ArrowLeft size={20} /></button>
                        <button onClick={next} className="bg-white p-2 rounded-lg hover:bg-gray-100 shadow-sm"><ArrowRight size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Card 2: Flip/Switch Card
export const FlipCard = ({ content }: { content: any }) => {
    const { image, frontTitle, backTitle } = content;
    const [showText, setShowText] = useState(false);
    return (
        <div
            className="h-full w-full relative cursor-pointer group"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        >
            <div className={`absolute inset-0 transition-opacity duration-500 ${showText ? 'opacity-0' : 'opacity-100'}`}>
                <img
                    src={image}
                    alt="Gathering"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 text-white font-bold text-2xl drop-shadow-md">{frontTitle}</div>
            </div>

            <div className={`absolute inset-0 bg-[#F1592C] p-8 flex flex-col justify-center items-start text-white transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-xl font-bold leading-relaxed text-left">{backTitle}</p>
            </div>
        </div>
    );
};

// Card 3: Stat Card
export const StatCard = ({ content }: { content: any }) => {
    const { value, unit = "", subtext = "", description } = content;
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (typeof value === 'number') {
            let start = 0;
            const end = value;
            const duration = 2000; // 2 seconds
            const incrementTime = 20; // update every 20ms
            const step = end / (duration / incrementTime);

            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    setDisplayValue(end);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.floor(start));
                }
            }, incrementTime);

            return () => clearInterval(timer);
        } else {
            // Fallback for previous string format if needed, though we updated content
            setDisplayValue(value);
        }
    }, [value]);

    return (
        <div
            className="h-full flex flex-col items-start justify-center p-8 bg-white text-left relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-baseline gap-2 mb-2">
                <div className="text-6xl font-bold text-text">
                    {displayValue}{unit}
                </div>
                {subtext && <div className="text-xl font-bold text-text/80">{subtext}</div>}
            </div>
            <p className="text-text/80 font-medium">{description}</p>
        </div>
    );
};

// Card 4: Slogan Card (Toggle)
export const SloganCard = ({ content }: { content: any }) => {
    const { title, clickHint, hiddenImage } = content;
    const [showImage, setShowImage] = useState(false);
    return (
        <div
            className="h-full w-full relative cursor-pointer flex items-center justify-center bg-white p-8 text-center hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
        >
            {!showImage ? (
                <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <span className="text-sm text-gray-400 mt-4 block">{clickHint}</span>
                </div>
            ) : (
                <img
                    src={hiddenImage}
                    alt="Slogan Visual"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
        </div>
    );
};

// Card 5: Banner Carousel
export const BannerCarouselCard = ({ content }: { content: any }) => {
    const { title, description, images } = content;
    const [idx, setIdx] = useState(0);

    const next = () => setIdx((p) => (p + 1) % images.length);
    const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative h-full w-full group overflow-hidden bg-black">
            {/* Background Images with Cross-fade */}
            {images.map((img: string, i: number) => (
                <div
                    key={i}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url('${img}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>
            ))}

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-white max-w-2xl z-10 pb-16">
                <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h2>
                <p className="text-white/95 text-lg leading-relaxed shadow-sm drop-shadow-md">{description}</p>
            </div>

            <div className="absolute right-8 bottom-8 flex gap-2 z-20">
                <button onClick={prev} className="bg-white/90 p-2 rounded hover:bg-white text-black"><ArrowLeft size={24} /></button>
                <button onClick={next} className="bg-white/90 p-2 rounded hover:bg-white text-black"><ArrowRight size={24} /></button>
            </div>
        </div>
    );
};
