import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import PropertyCategories from '@/components/home/PropertyCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InvestmentOpportunities from '@/components/home/InvestmentOpportunities';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import StatsSection from '@/components/home/StatsSection';
import Testimonials from '@/components/home/Testimonials';
import FAQPreview from '@/components/home/FAQPreview';
import VirtualTour from '@/components/home/VirtualTour';
import NewsBlog from '@/components/home/NewsBlog';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <WhyChooseUs />
      <InvestmentOpportunities />
      <FeaturedProjects />
      <StatsSection />
      <Testimonials />
      <VirtualTour />
      <FAQPreview />
      <NewsBlog />
      <CTASection />
    </>
  );
}
