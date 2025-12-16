import { useState } from 'react';
import { SearchBar } from '../../components/story/SearchBar';
import { BentoGrid, BentoItem } from '../../components/story/BentoGrid';
import { IntroCard, FlipCard, StatCard, SloganCard, BannerCarouselCard, StoryContent } from '../../components/story/StoryCards';

export const StoryLog = () => {
    const [currentTheme, setCurrentTheme] = useState("關於班厝");

    // 取出對應主題內容，若無則預設為 "關於班厝"
    const content = StoryContent[currentTheme] || StoryContent["關於班厝"];

    return (
        <div className="min-h-screen bg-bg pt-12 pb-24 px-4 md:px-12">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">故事誌</h1>
                {/* 顯示當前主題提示 */}
                {currentTheme !== "關於班厝" && (
                    <p className="text-primary mt-2">正在瀏覽：{currentTheme}</p>
                )}
            </div>

            <SearchBar currentTag={currentTheme} onSelectTag={setCurrentTheme} />

            <div className="max-w-[1400px] mx-auto">
                <BentoGrid>
                    {/* Row 1: Intro Card (Full Width) */}
                    <BentoItem className="md:col-span-3 h-[450px]">
                        <IntroCard content={content.intro} />
                    </BentoItem>

                    {/* Row 2: Three Cards */}
                    <BentoItem className="md:col-span-1 min-h-[400px]">
                        <FlipCard content={content.flip} />
                    </BentoItem>

                    <BentoItem className="md:col-span-1 min-h-[400px]">
                        <StatCard content={content.stat} />
                    </BentoItem>

                    <BentoItem className="md:col-span-1 min-h-[400px]">
                        <SloganCard content={content.slogan} />
                    </BentoItem>

                    {/* Row 3: Banner Card (Full Width) */}
                    <BentoItem className="md:col-span-3 min-h-[600px]">
                        <BannerCarouselCard content={content.banner} />
                    </BentoItem>
                </BentoGrid>
            </div>
        </div>
    );
};
