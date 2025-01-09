import React, { Suspense } from 'react';
import { cn } from '../../lib/utils';
import { Loading } from '../Loading';
import { Header } from './header'
import { CrossBar } from './crossBar';
export type MainLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const MainLayout = ({ children, className }: MainLayoutProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <CrossBar />
            <main className={cn('flex justify-center', className)}>
                {children}
            </main>
        </Suspense>
    ); 
};
