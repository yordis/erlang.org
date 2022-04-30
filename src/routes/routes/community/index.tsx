import { PageTitle } from '@/components/page-title';
import { Footer } from '@/components/footer';
import { Hero } from '@/routes/routes/community/components/hero';
import { CommunityLinks } from '@/routes/routes/community/components/community-links';

export function Community() {
  return (
    <>
      <PageTitle title="Community" />
      <Hero />
      <CommunityLinks/>
      <Footer />
    </>
  );
}
