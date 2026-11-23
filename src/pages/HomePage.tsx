import React from 'react';
import { UnipixExactHero } from '../components/home8/UnipixExactHero';
import { UnipixDualMarquee } from '../components/home8/UnipixDualMarquee';
import { UnipixExactAbout } from '../components/home8/UnipixExactAbout';
import { UnipixProgrammesSlider } from '../components/home8/UnipixProgrammesSlider';
import { UnipixExactFaculties } from '../components/home8/UnipixExactFaculties';
import { UnipixCampusFacilities } from '../components/home8/UnipixCampusFacilities';
import { UnipixModernProfessors } from '../components/home8/UnipixModernProfessors';
import { UnipixCrimsonTestimonialSlider } from '../components/home8/UnipixCrimsonTestimonialSlider';
import { UnipixExactAdmission } from '../components/home8/UnipixExactAdmission';
import { Home8Counters } from '../components/home8/Home8Counters';
import { UnipixCampusNews } from '../components/home8/UnipixCampusNews';
import { Home8CtaShapeFuture } from '../components/home8/Home8CtaShapeFuture';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Unipix Exact Hero Section (Matching Uploaded Screenshot Exactly) */}
      <UnipixExactHero />

      {/* 2. Dual Opposite Direction News & Disciplines Marquee (Matching Uploaded Screenshot) */}
      <UnipixDualMarquee />

      {/* 3. Unipix Exact About Section with Fixed-Background Parallax Window & 2-Line Body Paragraph */}
      <UnipixExactAbout />

      {/* 4. Contemporary Programmes Slider: 38 Degrees, Level Filters & Clean Geometry Cards */}
      <UnipixProgrammesSlider />

      {/* 5. Our Faculties & Departments: Horizontal Expanding Accordion (Matching Uploaded Screenshot Exactly) */}
      <UnipixExactFaculties />

      {/* 6. Campus Facilities & Student Life: Sports Arena, AI Research Labs, Library & Student Housing */}
      <UnipixCampusFacilities />

      {/* 7. Distinguished University Professors & Deans: High-Craft Modern Faculty Showcase */}
      <UnipixModernProfessors />

      {/* 8. White Testimonials Cards Slider on Deep Crimson Section (Replaces Carnival Box) */}
      <UnipixCrimsonTestimonialSlider />

      {/* 9. Admission At RKDF U & Floating Admission Form (Matching Uploaded Screenshot Exactly) */}
      <UnipixExactAdmission />

      {/* 10. Fun Facts / Counters: 4 numbers in a row */}
      <Home8Counters />

      {/* 11. Campus News & Research Dispatches: Spotlight Story + 3 Trending Articles */}
      <UnipixCampusNews />

      {/* 12. Pre-Footer CTA: Shape Your Future */}
      <Home8CtaShapeFuture />
    </div>
  );
};
