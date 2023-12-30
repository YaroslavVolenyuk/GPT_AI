import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import LandingContent from '../../components/landing-content';
import LandingHero from '../../components/landing-hero';
import LandingNavbar from '../../components/landingnavbar';

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <LandingNavbar />
      <LandingHero />
      {/* <LandingContent /> */}
    </div>
  );
};

export default LandingPage;
