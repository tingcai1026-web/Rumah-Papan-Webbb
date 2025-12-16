import { HeroSection } from '../components/home/HeroSection';
import { ImageShowcase } from '../components/home/ImageShowcase';
import { FeatureCards } from '../components/home/FeatureCards';
import { LifeSection } from '../components/home/LifeSection';
import { NewsList } from '../components/home/NewsList';

export const Home = () => {
    return (
        <>
            <HeroSection />
            <ImageShowcase />
            <FeatureCards />
            <LifeSection />
            <NewsList />
        </>
    );
};
