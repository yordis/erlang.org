import { PageTitle } from '@/components/page-title';
import { Footer } from '@/components/footer';
import { Hero } from '@/routes/routes/community/components/hero';
import { CommunityLinks } from '@/routes/routes/community/components/community-links';
import { Header } from '@/components/header';

export function Community() {
  return (
    <>
      <PageTitle title="Community" />
      <Header/>
      <div className="flex flex-col gap-20">
        <Hero />
        <CommunityLinks/>
      </div>
      <Footer />
    </>
  );
}
