interface RouteStep {
    step: number;
    title: string;
    description: string;
    duration?: string;
}

interface RouteStepsProps {
    title: string;
    steps: RouteStep[];
    icon?: React.ReactNode;
    note?: string;
}

export const RouteSteps = ({ title, steps, icon, note }: RouteStepsProps) => {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
                {icon && <div className="text-primary">{icon}</div>}
                <h3 className="text-2xl md:text-3xl font-bold text-text">{title}</h3>
            </div>

            <div className="space-y-6">
                {steps.map((stepItem, index) => (
                    <div key={index} className="flex gap-4">
                        {/* 步驟編號 */}
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                                {stepItem.step}
                            </div>
                            {index < steps.length - 1 && (
                                <div className="w-0.5 h-12 bg-primary/20 mx-auto mt-2" />
                            )}
                        </div>

                        {/* 步驟內容 */}
                        <div className="flex-grow pb-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-lg font-bold text-text">{stepItem.title}</h4>
                                {stepItem.duration && (
                                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                        {stepItem.duration}
                                    </span>
                                )}
                            </div>
                            <p className="text-base text-text/70 leading-relaxed">{stepItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 注意事項 */}
            {note && (
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                    <p className="text-sm text-yellow-800">
                        <span className="font-bold">⚠️ 提醒：</span> {note}
                    </p>
                </div>
            )}
        </div>
    );
};
