import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const contactMethods = [
    {
        icon: Facebook,
        platform: "Facebook",
        action: "聯繫班厝",
        color: "bg-[#1877F2]",
        hoverColor: "hover:bg-[#1877F2]/90"
    },
    {
        icon: Instagram,
        platform: "Instagram",
        action: "預約勘場",
        color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
        hoverColor: "hover:opacity-90"
    },
    {
        icon: MessageCircle,
        platform: "WhatsApp",
        action: "詢問檔期",
        color: "bg-[#25D366]",
        hoverColor: "hover:bg-[#25D366]/90"
    }
];

export const ContactMethods = () => {
    return (
        <section className="px-12 py-16 bg-white/40">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">聯絡方式</h2>
                    <p className="text-xl text-text/70 max-w-2xl mx-auto">
                        若有興趣想租借場地，歡迎透過下方 3 個管道聯繫我們
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
                            >
                                {/* Icon Container */}
                                <div className="mb-6 flex justify-center">
                                    <div
                                        className={`w-20 h-20 rounded-full flex items-center justify-center ${method.color} ${method.hoverColor} transition-all duration-300 group-hover:scale-110`}
                                    >
                                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Platform Name */}
                                <h3 className="text-2xl font-bold text-text mb-2">{method.platform}</h3>

                                {/* Action Text */}
                                <p className="text-lg text-text/70 font-medium">{method.action}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
