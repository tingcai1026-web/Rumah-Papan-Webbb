import { RentalShowcase } from '../../components/rental/RentalShowcase';
import { RentalProcess } from '../../components/rental/RentalProcess';
import { PricingPlans } from '../../components/rental/PricingPlans';
import { ContactMethods } from '../../components/rental/ContactMethods';

export const Rental = () => {
    return (
        <div className="min-h-screen bg-bg">
            {/* Hero Section */}
            <section className="px-12 py-16 md:py-24 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-text">場地租借</h1>
            </section>

            {/* Rental Showcase Carousel */}
            <RentalShowcase />

            {/* Rental Process */}
            <RentalProcess />

            {/* Pricing Plans */}
            <PricingPlans />

            {/* Contact Methods */}
            <ContactMethods />
        </div>
    );
};
