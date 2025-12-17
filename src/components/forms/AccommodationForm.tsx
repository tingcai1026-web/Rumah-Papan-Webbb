import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    nationality: string;
    checkInDate: string;
    checkInTime: string;
    checkOutDate: string;
    checkOutTime: string;
    roomCount: number;
    bedType: string;
    paymentMethod: string;
    notes: string;
}

export const AccommodationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        checkInDate: '',
        checkInTime: '',
        checkOutDate: '',
        checkOutTime: '',
        roomCount: 1,
        bedType: '',
        paymentMethod: '',
        notes: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 實際提交邏輯（發送Email或API）
        console.log('表單資料：', formData);
        setIsSubmitted(true);

        // 3秒後重置表單
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                nationality: '',
                checkInDate: '',
                checkInTime: '',
                checkOutDate: '',
                checkOutTime: '',
                roomCount: 1,
                bedType: '',
                paymentMethod: '',
                notes: ''
            });
        }, 3000);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">住宿報名</h2>
            <p className="text-lg text-text/60 mb-8">請填寫以下資訊，我們會盡快與您聯繫確認訂房。</p>

            {isSubmitted ? (
                <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-primary mb-2">報名成功！</h3>
                    <p className="text-lg text-text/70">我們已收到您的報名資訊，會盡快與您聯繫。</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 基本資訊 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">基本資訊</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    電話 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    placeholder="+60 12-345 6789"
                                />
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    國籍 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    placeholder="例如：台灣、馬來西亞"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 入住/退房時間 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">入住 / 退房時間</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    入住日期 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="checkInDate"
                                    value={formData.checkInDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    入住時間 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="time"
                                    name="checkInTime"
                                    value={formData.checkInTime}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    退房日期 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="checkOutDate"
                                    value={formData.checkOutDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    退房時間 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="time"
                                    name="checkOutTime"
                                    value={formData.checkOutTime}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 需求選擇 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">需求選擇</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    房間數量 <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="roomCount"
                                    value={formData.roomCount}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    首選床型 <span className="text-primary">*</span>
                                </label>
                                <select
                                    name="bedType"
                                    value={formData.bedType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors bg-white"
                                >
                                    <option value="">請選擇</option>
                                    <option value="雙人床">雙人床</option>
                                    <option value="上下舖">上下舖</option>
                                    <option value="單人床">單人床</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* 付款方式 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">付款方式</h3>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="信用卡"
                                    checked={formData.paymentMethod === '信用卡'}
                                    onChange={handleChange}
                                    required
                                    className="w-5 h-5 text-primary"
                                />
                                <span className="text-text">信用卡</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="現金"
                                    checked={formData.paymentMethod === '現金'}
                                    onChange={handleChange}
                                    required
                                    className="w-5 h-5 text-primary"
                                />
                                <span className="text-text">現金</span>
                            </label>
                        </div>
                    </div>

                    {/* 備註 */}
                    <div>
                        <label className="block text-text font-medium mb-2">
                            備註 / 特殊需求
                        </label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="請告訴我們任何特殊要求或問題"
                        />
                    </div>

                    {/* 送出按鈕 */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                        >
                            提交報名
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
