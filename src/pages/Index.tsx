import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import RevealSection from '@/components/sections/RevealSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ModulesSection from '@/components/sections/ModulesSection';
import BonusSection from '@/components/sections/BonusSection';
import PriceSection from '@/components/sections/PriceSection';
import GuaranteeSection from '@/components/sections/GuaranteeSection';
import MentorSection from '@/components/sections/MentorSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ForWhoSection from '@/components/sections/ForWhoSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Problem Section - Empathy */}
      <ProblemSection />
      
      {/* 3. Reveal Section - The Truth */}
      <RevealSection />
      
      {/* 4. Solution Section - Course Intro */}
      <SolutionSection />
      
      {/* 5. Modules Section - 8 Modules */}
      <ModulesSection />
      
      {/* 6. Bonus Section */}
      <BonusSection />
      
      {/* 7. Price Section - Special Offer */}
      <PriceSection />
      
      {/* 8. Guarantee Section */}
      <GuaranteeSection />
      
      {/* 9. Mentor Section - Anis */}
      <MentorSection />
      
      {/* 10. Testimonials Section */}
      <TestimonialsSection />
      
      {/* 11. For Who Section */}
      <ForWhoSection />
      
      {/* 12. FAQ Section */}
      <FAQSection />
      
      {/* 13. Final CTA Section */}
      <FinalCTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
