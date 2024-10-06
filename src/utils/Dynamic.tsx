/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {lazy, Suspense, ComponentType} from 'react';
import { IFormModalProps } from '../components/FormModal';

interface DynamicImportProps{
    fallback: React.ReactNode;
}

const Dynamic = (importFunc: () => Promise<{default: ComponentType<any>}>, {fallback}:DynamicImportProps) => {
    const LazyComponent = lazy(importFunc);
    return (props: IFormModalProps)=> (
        <Suspense fallback={fallback}>
            <LazyComponent {...props}/>
        </Suspense>
    );
}

export default Dynamic