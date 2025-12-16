import type { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
            {children}
        </div>
    );
};

export const BentoItem = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative ${className}`}>
            {children}
        </div>
    );
};
