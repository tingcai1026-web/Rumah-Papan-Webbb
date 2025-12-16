import { ArrowRight } from 'lucide-react';

const newsItems = [
    { date: "2025.12.02", tag: "最新", title: "《新村玩+》市集進駐班厝局！陪同度過雪州77個新村故事" },
    { date: "2025.12.01", tag: "最新", title: "走進馬來西亞最大福建新村：12/6 免費入村導覽" },
    { date: "2025.11.21", tag: "觀察", title: "舊村 Long Gai 去！帶著短褲布鞋一起出門 YouKai 咯！" },
    { date: "2025.11.06", tag: "觀察", title: "住進故事裡的舊村：2天1夜班厝民宿體驗" },
];

export const NewsList = () => {
    return (
        <section className="px-12 py-16 max-w-6xl mx-auto">
            <div className="space-y-0 divide-y divide-black/10">
                {newsItems.map((item, index) => (
                    <div key={index} className="group py-8 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors px-4 rounded-lg">
                        <div className="flex items-center gap-8 md:gap-16">
                            <span className="text-sm font-serif font-medium text-text/60 w-24">{item.date}</span>
                            <span className="px-3 py-1 rounded-full border border-text/30 text-xs font-medium text-text/70 group-hover:bg-text group-hover:text-white transition-colors">
                                {item.tag}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                        </div>
                        <ArrowRight className="text-text/30 group-hover:text-primary transform group-hover:translate-x-2 transition-all" />
                    </div>
                ))}
            </div>
        </section>
    );
};
