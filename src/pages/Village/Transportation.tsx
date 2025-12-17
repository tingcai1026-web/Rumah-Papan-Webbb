import { TransportCard } from '../../components/transportation/TransportCard';
import { MapSection } from '../../components/transportation/MapSection';
import { RouteSteps } from '../../components/transportation/RouteSteps';
import { Car, Phone, Clock as ClockIcon } from 'lucide-react';

export const Transportation = () => {
    // 交通方式卡片資料
    const transportOptions = [
        {
            icon: 'plane' as const,
            title: '從機場出發',
            subtitle: 'KLIA / KLIA2',
            estimatedTime: '約 1.5 小時',
            estimatedCost: 'RM 30-50',
            description: '從吉隆坡國際機場搭乘巴士至 Aeon Mall Bukit Tinggi，再轉乘 Grab 計程車前往班厝。',
            highlights: [
                '巴士：KLIA/KLIA2 → Aeon Mall (約1小時)',
                'Grab：Aeon Mall → 班厝 (約15分鐘/5km)'
            ]
        },
        {
            icon: 'train' as const,
            title: '從車站出發',
            subtitle: 'KL Sentral',
            estimatedTime: '約 1 小時',
            estimatedCost: 'RM 15-25',
            description: '從吉隆坡中央車站搭乘 KTM 電動火車至 Kampung Raja Uda 站，再轉乘 Grab 計程車。',
            highlights: [
                'KTM：KL Sentral → Kampung Raja Uda',
                'Grab：車站 → 班厝 (約7-12分鐘/2km)'
            ]
        },
        {
            icon: 'bus' as const,
            title: '免費接駁巴士',
            subtitle: 'Subang → KTM Klang',
            estimatedTime: '約 30 分鐘',
            description: '鐵路維修期間可搭乘免費接駁巴士，建議出發前先確認班次。',
            highlights: [
                '免費接駁：Subang → KTM Klang (約30分鐘)',
                '暫時性服務，請事先確認班次'
            ]
        }
    ];

    // 機場路線步驟
    const airportSteps = [
        {
            step: 1,
            title: 'KLIA / KLIA2 搭乘巴士',
            description: '在機場巴士站尋找前往 Aeon Mall Bukit Tinggi, Klang 的巴士。',
            duration: '約 1 小時'
        },
        {
            step: 2,
            title: '抵達 Aeon Mall Bukit Tinggi',
            description: '下車後，使用 Grab 或計程車前往班厝故事館。',
            duration: '約 15 分鐘'
        },
        {
            step: 3,
            title: '抵達班厝故事館',
            description: '車程約 5 公里，沿途可欣賞班達馬蘭新村風光。'
        }
    ];

    // 車站路線步驟
    const trainSteps = [
        {
            step: 1,
            title: 'KL Sentral 搭乘 KTM',
            description: '前往 KL Sentral 的 KTM 月台，搭乘往 Port Klang 方向的電動火車。',
            duration: '約 40-50 分鐘'
        },
        {
            step: 2,
            title: '在 Kampung Raja Uda 站下車',
            description: '這是離班厝最近的 KTM 車站，下車後步行至站外。'
        },
        {
            step: 3,
            title: '轉乘 Grab 或計程車',
            description: '使用 Grab App 或搭乘計程車前往班厝故事館。',
            duration: '約 7-12 分鐘'
        },
        {
            step: 4,
            title: '抵達班厝故事館',
            description: '車程約 2 公里，司機可能需要導航協助。'
        }
    ];

    // 接駁巴士步驟
    const shuttleSteps = [
        {
            step: 1,
            title: '出站步行至免費接駁巴士月台',
            description: '找到標示「Free Shuttle Bus」的乘車處。'
        },
        {
            step: 2,
            title: '搭乘免費接駁巴士',
            description: '從 Subang 前往 KTM Klang（巴生站）。',
            duration: '約 30 分鐘'
        },
        {
            step: 3,
            title: '轉乘其他交通工具',
            description: '抵達 KTM Klang 後，可搭乘 Grab 或計程車前往班厝。'
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* 標題區塊 */}
            <section className="px-12 pt-16 pb-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">如何到達班厝</h1>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-text/70 max-w-3xl mx-auto">
                        從吉隆坡國際機場或市中心出發，多種交通方式帶您來到班達馬蘭新村
                    </p>
                </div>
            </section>

            {/* 交通方式卡片 */}
            <section className="px-12 pb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {transportOptions.map((option, index) => (
                        <TransportCard key={index} {...option} />
                    ))}
                </div>
            </section>

            {/* 自駕資訊卡片 */}
            <section className="px-12 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-primary">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                    <Car className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-text mb-3">自駕前往</h3>
                                <p className="text-base text-text/80 mb-4">
                                    從吉隆坡市中心出發，經由 Federal Highway 或 KESAS Highway 前往巴生，車程約 30-40 分鐘。
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-text/70">
                                        <ClockIcon className="w-5 h-5 text-primary" />
                                        <span>預計時間：約 30-40 分鐘</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-text/70">
                                        <Car className="w-5 h-5 text-primary" />
                                        <span>館內提供免費停車位</span>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-white/50 rounded-lg">
                                    <p className="text-sm text-text/70">
                                        💡 <strong>停車建議：</strong>館內設有停車空間，如遇滿位可停放於附近街道（請注意當地停車規定）
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 互動式地圖 */}
            <section className="px-12 pb-16">
                <div className="max-w-7xl mx-auto">
                    <MapSection
                        address="班厝故事館, Pandamaran, Klang, Selangor, Malaysia"
                        googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0157289847626!2d101.38968831475613!3d3.0157289979729144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnNTYuNSJOIDEwMcKwMjMnMjIuOSJF!5e0!3m2!1sen!2smy!4v1634567890123"
                    />
                </div>
            </section>

            {/* 詳細路線說明 */}
            <section className="px-12 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">詳細路線說明</h2>
                        <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 機場路線 */}
                        <RouteSteps
                            title="從機場出發"
                            steps={airportSteps}
                        />

                        {/* 車站路線 */}
                        <RouteSteps
                            title="從車站出發"
                            steps={trainSteps}
                        />

                        {/* 接駁巴士路線 */}
                        <div className="lg:col-span-2">
                            <RouteSteps
                                title="免費接駁巴士"
                                steps={shuttleSteps}
                                note="此接駁服務為鐵路維修期間的暫時性安排，建議出發前先透過 Facebook 或 WhatsApp 確認班次與時間。"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 實用資訊 */}
            <section className="px-12 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">實用資訊</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* 聯絡資訊 */}
                            <div>
                                <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-primary" />
                                    聯絡方式
                                </h3>
                                <div className="space-y-3 text-text/70">
                                    <p><strong>Facebook:</strong> 班厝故事館</p>
                                    <p><strong>Instagram:</strong> @banchustoryhouse</p>
                                    <p><strong>WhatsApp:</strong> +60 12-XXX XXXX</p>
                                    <p><strong>Email:</strong> info@banchu.com</p>
                                </div>
                            </div>

                            {/* 開放時間 */}
                            <div>
                                <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                                    <ClockIcon className="w-5 h-5 text-primary" />
                                    開放時間
                                </h3>
                                <div className="space-y-3 text-text/70">
                                    <p><strong>週二至週日:</strong> 10:00 AM - 6:00 PM</p>
                                    <p><strong>週一:</strong> 休館</p>
                                    <p className="text-sm text-primary">
                                        ⚠️ 建議提前預約，確保館內有人接待
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 交通提示 */}
                        <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                            <h4 className="font-bold text-text mb-3">💡 交通小提示</h4>
                            <ul className="space-y-2 text-text/70 text-sm">
                                <li>• <strong>Grab 使用：</strong>建議使用 Grab App，輸入「班厝故事館」或完整地址導航</li>
                                <li>• <strong>現金準備：</strong>部分計程車司機可能只收現金，建議準備零錢</li>
                                <li>• <strong>預約接送：</strong>如需館方協助安排接送，請提前 1-2 天聯繫</li>
                                <li>• <strong>迷路協助：</strong>若在路上迷路，可致電館方或使用 WhatsApp 分享即時位置</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
