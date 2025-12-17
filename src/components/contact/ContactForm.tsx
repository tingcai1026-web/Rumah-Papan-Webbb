import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 實際提交邏輯
        console.log('聯絡表單資料：', formData);
        setIsSubmitted(true);

        // 3秒後重置
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">傳送訊息</h2>
            <p className="text-lg text-text/60 mb-8">請填寫以下資訊，我們會盡快回覆您。</p>

            {isSubmitted ? (
                <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-primary mb-2">訊息已送出！</h3>
                    <p className="text-lg text-text/70">感謝您的來信，我們會盡快與您聯繫。</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 姓名 */}
                    <div>
                        <label className="block text-text font-medium mb-2">
                            姓名 <span className="text-primary">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            placeholder="請輸入您的姓名"
                        />
                    </div>

                    {/* Email & 電話 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-text font-medium mb-2">
                                Email <span className="text-primary">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                placeholder="example@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-text font-medium mb-2">
                                電話
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                placeholder="+60 12-345 6789"
                            />
                        </div>
                    </div>

                    {/* 主旨 */}
                    <div>
                        <label className="block text-text font-medium mb-2">
                            主旨 <span className="text-primary">*</span>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            placeholder="請簡述您的詢問主題"
                        />
                    </div>

                    {/* 訊息內容 */}
                    <div>
                        <label className="block text-text font-medium mb-2">
                            訊息內容 <span className="text-primary">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="請詳細說明您的問題或需求"
                        />
                    </div>

                    {/* 送出按鈕 */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3"
                        >
                            <Send className="w-5 h-5" />
                            <span>送出訊息</span>
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
