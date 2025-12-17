import { useState } from 'react';

interface FormData {
    // 基本資料
    name: string;
    photo: File | null;
    phone: string;
    email: string;
    whatsapp: string;
    facebook: string;
    instagram: string;
    blog: string;

    // 換宿意願
    startDate: string;
    endDate: string;
    reason: string;

    // 自我介紹
    personality: string;
    interests: string;
    motivation: string;

    // 專業技能
    languages: string;
    drivingLicense: string;
    design: boolean;
    videoEditing: boolean;
    writing: boolean;
    cooking: boolean;
    gardening: boolean;
    socialMedia: boolean;
    otherSkills: string;

    // 相關經歷
    experience: string;
}

export const SkillExchangeForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        photo: null,
        phone: '',
        email: '',
        whatsapp: '',
        facebook: '',
        instagram: '',
        blog: '',
        startDate: '',
        endDate: '',
        reason: '',
        personality: '',
        interests: '',
        motivation: '',
        languages: '',
        drivingLicense: '',
        design: false,
        videoEditing: false,
        writing: false,
        cooking: false,
        gardening: false,
        socialMedia: false,
        otherSkills: '',
        experience: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else if (type === 'file') {
            const file = (e.target as HTMLInputElement).files?.[0] || null;
            setFormData(prev => ({
                ...prev,
                [name]: file
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 實際提交邏輯（發送Email或API）
        console.log('表單資料：', formData);
        setIsSubmitted(true);

        // 3秒後重置
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">技能換宿申請</h2>
            <p className="text-lg text-text/60 mb-8">請詳細填寫以下資訊，讓我們更認識你。</p>

            {isSubmitted ? (
                <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-primary mb-2">申請已送出！</h3>
                    <p className="text-lg text-text/70">我們已收到您的申請，會在一週內與您聯繫。</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* 基本資料 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">基本資料</h3>
                        <div className="space-y-4">
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
                                        近照上傳 <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        name="photo"
                                        onChange={handleChange}
                                        accept="image/*"
                                        required
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        手機 <span className="text-primary">*</span>
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
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        WhatsApp 帳號 <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="+60 123456789"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        Facebook（選填）
                                    </label>
                                    <input
                                        type="text"
                                        name="facebook"
                                        value={formData.facebook}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="@username"
                                    />
                                </div>
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        Instagram（選填）
                                    </label>
                                    <input
                                        type="text"
                                        name="instagram"
                                        value={formData.instagram}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="@username"
                                    />
                                </div>
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        個人部落格（選填）
                                    </label>
                                    <input
                                        type="url"
                                        name="blog"
                                        value={formData.blog}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 換宿意願與目的 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">換宿意願與目的</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        預計開始日期 <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        預計結束日期 <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    換宿原因 <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="簡潔說明為什麼想來班厝換宿"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 自我介紹 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">自我介紹</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    人格特質與興趣 <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    name="personality"
                                    value={formData.personality}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="請描述您的個性、喜歡做的事"
                                />
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    為什麼想打工換宿 <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    name="motivation"
                                    value={formData.motivation}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="告訴我們您的動機與期待"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 專業技能與專長 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">專業技能與專長</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        語言能力 <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="languages"
                                        value={formData.languages}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="例如：中文、英文、馬來文"
                                    />
                                </div>
                                <div>
                                    <label className="block text-text font-medium mb-2">
                                        駕照
                                    </label>
                                    <input
                                        type="text"
                                        name="drivingLicense"
                                        value={formData.drivingLicense}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="例如：汽車、機車"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-3">
                                    軟技能（可複選）
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {[
                                        { name: 'design', label: '美編設計' },
                                        { name: 'videoEditing', label: '影片剪輯' },
                                        { name: 'writing', label: '文案撰寫' },
                                        { name: 'cooking', label: '廚藝' },
                                        { name: 'gardening', label: '園藝' },
                                        { name: 'socialMedia', label: '社群經營' }
                                    ].map(skill => (
                                        <label key={skill.name} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name={skill.name}
                                                checked={formData[skill.name as keyof FormData] as boolean}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-primary rounded"
                                            />
                                            <span className="text-text">{skill.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-text font-medium mb-2">
                                    其他任何能幫助班厝的技能
                                </label>
                                <textarea
                                    name="otherSkills"
                                    value={formData.otherSkills}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="請描述任何其他專長或技能"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 相關經歷 */}
                    <div>
                        <h3 className="text-xl font-bold text-text mb-4 pb-2 border-b-2 border-primary/20">相關經歷</h3>
                        <div>
                            <label className="block text-text font-medium mb-2">
                                打工換宿或相關工作經驗
                            </label>
                            <textarea
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="若有打工換宿經驗可分享心得；沒有經驗可寫相關工作、打工或實習經驗"
                            />
                        </div>
                    </div>

                    {/* 送出按鈕 */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                        >
                            提交申請
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
