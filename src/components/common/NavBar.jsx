import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import * as reactUse from 'react-use';

// const navItems = ['About', 'Services', 'Projects', 'Contact'];
const navItems = ['About', 'Services', 'Contact'];

const NavBar = () => {
  const navContainerRef = useRef(null);

  // react-use may be CommonJS — use a namespace import to access the hook safely
  const scroll = reactUse.useWindowScroll
    ? reactUse.useWindowScroll()
    : { y: 0 };
  const currentScrollY = scroll.y;

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove('floating-nav');
    } else if (currentScrollY > prevScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add('floating-nav');
    } else if (currentScrollY < prevScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add('floating-nav');
    }

    setPrevScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      className="fixed inset-x-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      ref={navContainerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="/">
              <img
                className="w-60"
                src="images/logo.webp"
                alt="Northern Venture logo"
              />
            </a>
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  className="nav-hover-btn"
                  key={index}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
