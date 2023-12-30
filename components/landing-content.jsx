import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Teacher',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Dave',
    avatar: 'D',
    title: 'Filmmaker',
    description: 'AI accelerates the development and coding tasks.',
  },
  {
    name: 'Kate',
    avatar: 'K',
    title: 'Designer',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Gabi',
    avatar: 'G',
    title: 'Teacher',
    description: 'AI simplifies the video production process.',
  },
  {
    name: 'Pavlo',
    avatar: 'P',
    title: 'Artist',
    description: 'AI simplifies the video production process.',
  },
  {
    name: 'Viktor',
    avatar: 'V',
    title: 'Artist',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Benjamin',
    avatar: 'B',
    title: 'Developer',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Jack',
    avatar: 'J',
    title: 'Musician',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Andreas',
    avatar: 'A',
    title: 'Teacher',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Alex',
    avatar: 'A',
    title: 'Engineer',
    description: 'AI makes creating music more intuitive and innovative.',
  },
  {
    name: 'Mike',
    avatar: 'M',
    title: 'Teacher',
    description: 'AI assists in creating stunning visuals effortlessly.',
  },
];

const LandingContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingLeft: '2.5rem', // px-10
        paddingBottom: '5rem', // pb-20
      }}
    >
      <h2
        style={{
          textAlign: 'center', // text-center
          fontSize: '2.25rem', // text-4xl (хотя, возможно, тут опечатка и должно быть text-4xl)
          color: 'white', // text-white
          fontWeight: 800, // font-extrabold
          marginBottom: '2.5rem', // mb-10
        }}
      >
        {testimonials.map((item) => (
          <Card
            key={item.description}
            style={{
              height: '200px',
              width: '200px',
              backgroundColor: '#192339', // bg-[#192339]
              border: 'none', // border-none
              color: 'white', // text-white
            }}
          >
            <CardHeader>
              <CardTitle
                style={{
                  display: 'flex', // flex
                  alignItems: 'center', // items-center
                  gap: '0.5rem', // gap-x-2
                }}
              >
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </h2>
    </div>
  );
};

export default LandingContent;
