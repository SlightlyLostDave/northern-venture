import { useState } from 'react';

const Hero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* 
      {loading && (
        <div className="flex items-center justify-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 *
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}  */}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-700"
      >
        <div>
          <div className="mask-clip-path absolute-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
