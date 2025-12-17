import { MapPin, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface MapSectionProps {
    address?: string;
    googleMapsUrl?: string;
}

export const MapSection = ({
    address = "班厝故事館, Pandamaran, Klang, Selangor",
    googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0157!2d101.3897!3d3.0157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnNTYuNSJOIDEwMcKwMjMnMjIuOSJF!5e0!3m2!1sen!2smy!4v1234567890"
}: MapSectionProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-primary" />
                    位置與地圖
                </h2>
                <p className="text-lg text-text/70">班達馬蘭新村，巴生，雪蘭莪</p>
            </div>

            {/* 地址與操作按鈕 */}
            <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <p className="font-medium text-text">{address}</p>
                        <p className="text-sm text-text/60 mt-1">GPS: 3.0157° N, 101.3897° E</p>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={handleCopyAddress}
                        className="px-4 py-2 bg-text/5 hover:bg-text/10 rounded-lg text-text text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Copy className="w-4 h-4" />
                        {copied ? '已複製！' : '複製地址'}
                    </button>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-white text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <ExternalLink className="w-4 h-4" />
                        開啟導航
                    </a>
                </div>
            </div>

            {/* Google Maps 嵌入 */}
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="班厝故事館位置地圖"
                />
            </div>

            {/* 地圖提示 */}
            <p className="text-sm text-text/50 mt-4 text-center">
                💡 您可以在地圖上縮放、拖曳查看周邊環境，或點擊「開啟導航」直接使用 Google Maps 導航
            </p>
        </div>
    );
};
