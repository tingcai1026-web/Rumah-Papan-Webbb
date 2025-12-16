import { ArrowRight } from 'lucide-react';

const cards = [
    { title: "新村導覽", icon: true }, // Placeholder for specific icon logic if needed
    { title: "住宿體驗", icon: true },
    { title: "技能換宿", icon: true },
];

export const FeatureCards = () => {
    return (
        <section className="px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-surface rounded-2xl p-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-widest text-text/50">rumah papan</span>
                            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">
                                {card.title}
                            </h3>
                        </div>
                        <ArrowRight className="text-text/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                ))}
            </div>
        </section>
    );
};
