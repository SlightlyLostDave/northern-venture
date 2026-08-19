import { useState, useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
// import { TiLocationArrow } from 'react-icons/ti';

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt = ({ children, className = '' }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: string;
  description?: string;
}

export const BentoCard = ({ src, title, description }: BentoCardProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;

    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-orange-50 bg-gradient-to-r from-black to-transparent">
        <div>
          <h1 className="bento-title">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-s md:text-base">{description}</p>
          )}
        </div>

        {/* {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border border-white/20 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect 
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            {/* <TiLocationArrow className="relative z-20" /> 
            <p className="relative z-20">coming soon</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

const Services = () => (
  <section id="services" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-orange-50">
          Aerial Insights for Those Who Build, Explore, and Preserve
        </p>
        <p className="max-w-md font-circular-web text-lg text-orange-50 opacity-50">
          Every mission starts with understanding the landscape. Northern
          Venture Drone Services offers a range of mapping and inspection
          solutions designed for those pushing boundaries—surveyors, builders,
          conservationists, and explorers alike. We turn complex terrain into
          clear, actionable data so you can focus on what’s ahead.
        </p>
      </div>

      <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="video/home/services-agriculture.mp4"
          title="Agriculture"
          description="Monitor crop health, assess field conditions, and optimize yields with detailed aerial imagery and data analysis. Our drone mapping solutions help farmers make smarter, more sustainable decisions from planting to harvest."
        />
      </BentoTilt>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 grid-rows-[repeat(3,minmax(0,1fr))] gap-7">
        {/* First tile (Construction) */}
        <BentoTilt className="bento-tilt_1 col-span-1 row-span-1 sm:row-span-2">
          <BentoCard
            src="video/home/services-construction.mp4"
            title="Construction"
            description="Track progress, document milestones, and inspect worksites with precision aerial mapping and 3D modeling. We deliver the insights you need to stay on schedule, improve safety, and reduce costly rework."
          />
        </BentoTilt>

        {/* Second tile (Mining) */}
        <BentoTilt className="bento-tilt_1 col-span-1">
          <BentoCard
            src="video/home/services-mining.mp4"
            title="Mining"
            description="Gain a clearer view of your operation with accurate volumetric measurements, site mapping, and terrain models. Our drone data helps mining teams improve efficiency, monitor change, and ensure safety across every stage of production."
          />
        </BentoTilt>

        {/* Third tile (Preservation) */}
        <BentoTilt className="bento-tilt_1 col-span-1">
          <BentoCard
            src="video/home/services-preservation.mp4"
            title="Preservation"
            description="Capture detailed 3D models and high-resolution imagery of heritage structures and sites. Our photogrammetry services help preservation teams document, study, and protect Canada’s historical landmarks for future generations."
          />
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            {/* <TiLocationArrow className="m-5 scale-[5] self-end" /> 
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt> */}
      </div>
    </div>
  </section>
);

export default Services;
