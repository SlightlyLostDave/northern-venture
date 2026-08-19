import { useEffect, useState } from 'react';

import '@styles/loading-screen.css';

interface LoadingScreenProps {
  loading: boolean;
}

const LoadingScreen = ({ loading }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (loading) return;

    setFading(true);
    const timeout = setTimeout(() => setVisible(false), 500);

    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-red-50 transition-opacity duration-500 ease-in-out font-monospace text-2xl uppercase tracking-widest ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="loader pt-4"></div>
      Loading
    </div>
  );
};

export default LoadingScreen;
