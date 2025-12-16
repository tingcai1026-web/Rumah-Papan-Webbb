import { FileText, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const processSteps = [
    {
        icon: FileText,
        step: "Step 1",
        title: "聯繫&提出需求",
        description: "分享你預計的拍攝／活動日期、人數與用途，可透過表單、FB、IG 或 WhatsApp 聯絡班厝。"
    },
    {
        icon: MapPin,
        step: "Step 2",
        title: "場勘&報價確認",
        description: "現班厝會回覆可用檔期，如有需要可預約勘場，並提供正式報價與方案。"
    },
    {
        icon: CheckCircle,
        step: "Step 3",
        title: "確認&進場使用",
        description: "確認日期後簽約與付訂，劇組可提前進場佈置，活動當天由班厝協助開門與善後。"
    }
];

export const RentalProcess = () => {
    return (
        <section className="px-12 py-16 bg-white/40">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="flex items-center gap-8 mb-16">
                    <h2 className="text-4xl font-bold text-text whitespace-nowrap">租借流程</h2>
                    <div className="h-px bg-text/20 flex-grow"></div>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {processSteps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Card */}
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                                    </div>

                                    {/* Step Label */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-lg font-bold text-text">{item.step}</span>
                                        {index < processSteps.length - 1 && (
                                            <ArrowRight className="w-5 h-5 text-text/40 hidden md:block" />
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-text mb-4">{item.title}</h3>

                                    {/* Description */}
                                    <p className="text-base text-text/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Arrow between cards (desktop only) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-8 h-8 text-primary" strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
