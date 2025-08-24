'use client';

import GlobalError from '@/components/globalerror';

export default function RootGlobalError({
                                            error,
                                            reset,
                                        }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <GlobalError error={error} reset={reset} />;
}