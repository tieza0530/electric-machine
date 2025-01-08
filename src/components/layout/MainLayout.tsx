import React, { Suspense } from 'react';
import { cn } from '../../lib/utils';
import { Loading } from '../Loading';
import { Header } from './Header'
export type MainLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const MainLayout = ({ children, className }: MainLayoutProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <main className={cn('flex', className)}>
                {children}
            </main>
        </Suspense>
    );
};
