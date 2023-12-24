import Image from 'next/image';
import React from 'react';

const Empty = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative">
        <Image alt="" fill src="/empty.png" />
        <Image alt="123" width={300} height={300} src={'/empty.png'} />
      </div>
      <p className="text-sm text-center text-muted-foreground">{label}</p>
    </div>
  );
};

export default Empty;
