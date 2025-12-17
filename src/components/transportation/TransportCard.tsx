import { Car, Train, Plane, Clock, DollarSign } from 'lucide-react';

interface TransportCardProps {
    icon: 'car' | 'train' | 'plane' | 'bus';
    title: string;
    subtitle: string;
    estimatedTime?: string;
    estimatedCost?: string;
    description: string;
    highlights?: string[];
}

const iconMap = {
    car: Car,
    train: Train,
    plane: Plane,
    bus: Train // 使用火車圖標代表巴士
};

export const TransportCard = ({
    icon,
    title,
    subtitle,
    estimatedTime,
    estimatedCost,
    description,
    highlights
}: TransportCardProps) => {
    const Icon = iconMap[icon];

    return (
        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            {/* 圖標 */}
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon
                    className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                />
            </div>

            {/* 標題 */}
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-2">{title}</h3>
            <p className="text-base md:text-lg text-text/60 mb-4">{subtitle}</p>

            {/* 時間與費用 */}
            <div className="flex gap-4 mb-4">
                {estimatedTime && (
                    <div className="flex items-center gap-2 text-text/70">
                        <Clock className="w-4 h-4" strokeWidth={2} />
                        <span className="text-sm">{estimatedTime}</span>
                    </div>
                )}
                {estimatedCost && (
                    <div className="flex items-center gap-2 text-text/70">
                        <DollarSign className="w-4 h-4" strokeWidth={2} />
                        <span className="text-sm">{estimatedCost}</span>
                    </div>
                )}
            </div>

            {/* 描述 */}
            <p className="text-base text-text/80 leading-relaxed mb-4">{description}</p>

            {/* 重點資訊 */}
            {highlights && highlights.length > 0 && (
                <div className="pt-4 border-t border-text/10">
                    <ul className="space-y-2">
                        {highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-text/70">
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
