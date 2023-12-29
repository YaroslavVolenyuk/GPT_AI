import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        height: '100%' /* h-full */,
        display: 'flex' /* flex */,
        flexDirection: 'column' /* flex-col */,
        gap: '1rem' /* gap-y-4 */,
        justifyContent: 'center' /* justify-center */,
        alignItems: 'center' /* items-center */,
      }}
    >
      <div
        style={{
          width: '2.5rem' /* w-10 */,
          height: '2.5rem' /* h-10 */,
          position: 'relative' /* relative */,
          animation: 'spin 1s linear infinite' /* animate-spin */,
        }}
      >
        <Image src={'/logo.png'} alt="" fill />
      </div>
      <p
        style={{
          fontSize: '0.875rem' /* text-sm */,
          color:
            '/* text-muted-foreground color */' /* text-muted-foreground */,
        }}
      >
        Genius is thinking...
      </p>
    </div>
  );
};

export default Loader;
