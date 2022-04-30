import type { ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout = NextPage & {
  getPageLayout?: (page: ReactNode) => ReactNode;
};
