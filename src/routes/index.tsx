import { PageTitle } from '@/components/page-title';
import { Hero } from '@/routes/components/hero';
import { Footer } from '@/components/footer';
import { TrustedBy } from '@/routes/components/trusted-by';
import { Features } from '@/routes/components/features';
import { Testimonial } from '@/routes/components/testimonial';

export function Index() {
  return (
    <>
      <PageTitle title="Home" />
      <Hero />
      <TrustedBy />
      <Testimonial />
      <Features />
      <Footer />
    </>
  );
}
