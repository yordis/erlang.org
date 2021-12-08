import * as React from 'react';
import { useRouter } from 'next/router';

export function useAnalyticsPageTrack() {
  const router = useRouter();

  React.useEffect(() => {
    function onRouteChangeComplete(url: string) {
      console.log('New Route', url);
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
}
