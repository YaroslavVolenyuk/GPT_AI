'use client';

import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div
        style={{
          fontSize: '3rem' /* text-4xl */,
          lineHeight:
            '1' /* из-за font-extrabold, lineHeight часто устанавливается на 1 */,
          fontWeight: 800 /* font-extrabold */,
          margin: '5rem',
        }}
      >
        <h1>The best AI tool for</h1>
        <div
          style={{
            color: 'transparent' /* text-transparent */,
            backgroundImage:
              'linear-gradient(to right, #9F7AEA, #ED64A6)' /* bg-gradient-to-r from-purple-400 to-pink-600 */,
            WebkitBackgroundClip: 'text' /* bg-clip-text */,
            backgroundClip: 'text' /* bg-clip-text */,
          }}
        >
          <TypewriterComponent
            options={{
              strings: [
                'Chatbot.',
                'Images generation.',
                'Music generation.',
                'Code generation.',
                'Video generation.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content 10 times faster.
      </div>
      <div>
        <Link href={'/dashboard'}>
          <Button
            style={{
              color: 'white' /* text-transparent */,
              backgroundImage: 'linear-gradient(to right, #8654e9, #ED64A6)',
              margin: '1rem',
            }}
          >
            Start generating for free
          </Button>
        </Link>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        No credit card required*
      </div>
    </div>
  );
};

export default LandingHero;
