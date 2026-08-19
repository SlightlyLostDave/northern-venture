import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="text-sm uppercase md:text-[0.75rem]">
          Welcome to Northern Venture
        </p>

        <AnimatedTitle
          title="Aerial Intelligence for <br /> Ground-Level Decisions"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="absolute bottom-[-125dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center text-lg sm:bottom-[-95dvh] md:bottom-[-102dvh] md:max-w-[34rem]">
          <p>
            At Northern Venture Drone Services, we deliver high-precision aerial
            mapping, inspection, and imaging solutions that help industries make
            smarter, safer, and faster decisions. Based in Kitchener, Ontario,
            we specialize in capturing detailed geospatial data for
            construction, mining, agriculture, and infrastructure projects.
            Whether it’s creating accurate 3D models, monitoring progress, or
            inspecting hard-to-reach assets, our advanced drone technology
            provides a clear perspective &mdash; so you can see more and know
            more.
          </p>
        </div>
      </div>

      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
          <img
            className="absolute left-0 top-0 size-full object-cover"
            src="images/home/about.webp"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
