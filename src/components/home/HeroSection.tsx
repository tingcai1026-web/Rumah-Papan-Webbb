import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    // 預設內容 (也是 "關於班厝" 的內容)
    const defaultContent = {
        title: <>一間為班達馬蘭<br />存放記憶的厝</>,
        description: "班厝是一間收集故事的厝，牆上是老照片，桌上是新朋友，讓一條華人新村的記憶持續被看見。"
    };

    const [activeContent, setActiveContent] = useState(defaultContent);

    const tagData = [
        {
            text: "關於班厝",
            position: { top: "8%", right: "52%" },
            content: defaultContent
        },
        {
            text: "來一碗馬來西亞肉骨茶？",
            position: { top: "8%", left: "52%" },
            content: {
                title: <>一碗肉骨茶，<br />班達馬蘭的早安</>,
                description: "在班村，清晨不是咖啡香，而是一鍋熱騰騰的肉骨茶，陪你慢慢開始一天的新村步調。"
            }
        },
        {
            text: "想不想用走的認識華人新村？",
            position: { top: "30%", right: "52%" },
            content: {
                title: <>用腳一步一步<br />認識班達馬蘭</>,
                description: "跟著導覽在巷口轉彎，廟前停下，聽人把班達馬蘭的過去現在，慢慢說成你聽得懂的故事。"
            }
        },
        {
            text: "永續生活",
            position: { top: "30%", left: "52%" },
            content: {
                title: <>把永續活在<br />每天的小事裡</>,
                description: "在班厝，永續不是口號，而是一起把廚餘變養分、果皮變酵素、菜園當作共同的責任。"
            }
        },
        {
            text: "下一個來交換故事的人會是你嗎？",
            position: { top: "52%", right: "52%" },
            content: {
                title: <>來班厝，<br />換一個故事回去</>,
                description: "有人帶著旅程來，有人帶著生活來，在班厝，每次聊天都多一個人，記得這條新村。"
            }
        },
        {
            text: "一起過節好嗎？",
            position: { top: "52%", left: "52%" },
            content: {
                title: <>拜天公、過中秋，<br />把節日當成家務事</>,
                description: "設香案、掛燈籠、桌椅排滿街；在班達馬蘭新村，過節就是整條街一起動起來，你來就多一副筷子。"
            }
        },
        {
            text: "技能換宿",
            position: { top: "76%", left: "50%" },
            content: {
                title: <>用你的專長<br />換一段新村生活</>,
                description: "有人幫忙整理環境，有人拿相機記錄；你把時間和專長留在這裡，新村就慢慢把你當自己人。"
            }
        }
    ];

    return (
        <section className="relative px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text transition-all duration-300">
                    {activeContent.title}
                </h1>
                <p className="text-lg md:text-xl text-text/80 max-w-md leading-relaxed transition-all duration-300">
                    {activeContent.description}
                </p>

                <div className="pt-12">
                    <div className="flex flex-col items-center w-fit gap-2 animate-bounce cursor-pointer text-text/60 hover:text-primary transition-colors">
                        <ArrowDown className="border rounded-full p-1 w-8 h-8 border-current" />
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                    </div>
                </div>
            </div>

            {/* Right Content - Tags Cloud */}
            <div className="relative h-full min-h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full">
                    {tagData.map((tag, index) => (
                        <Tag
                            key={index}
                            text={tag.text}
                            {...tag.position}
                            onMouseEnter={() => setActiveContent(tag.content)}
                            onMouseLeave={() => setActiveContent(defaultContent)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Tag = ({ text, top, left, right, bottom, onMouseEnter, onMouseLeave }: {
    text: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void
}) => {
    return (
        <div
            className="absolute bg-transparent border-2 border-text px-8 py-4 rounded-[2rem] text-lg font-medium text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:-translate-y-1 group whitespace-nowrap"
            style={{ top, left: left === "50%" ? "50%" : left, right, bottom, transform: left === "50%" ? "translateX(-50%)" : undefined }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="relative">
                {text}
            </div>
            {/* Solid Triangle */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-text group-hover:border-t-white transition-colors duration-300"></div>
        </div>
    );
};
