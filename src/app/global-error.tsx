'use client';

import GlobalError from '@/components/global-error';

export default function RootGlobalError({
                                            error,
                                            reset,
                                        }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <GlobalError error={error} reset={reset} />;
}