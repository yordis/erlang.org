import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useAnalyticsPageTrack() {
  const router = useRouter();

  useEffect(() => {
    function onRouteChangeComplete(url: string) {
      console.log('New Route', url);
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
}
