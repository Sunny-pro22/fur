import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScrollContext = createContext(null);
export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const [scroll, setScroll] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;
    let instance;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      instance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.075,
        multiplier: 1,
        class: 'is-inview',
        smartphone: { smooth: false },
        tablet: { smooth: false },
      });

      setScroll(instance);
      instance.scrollTo(0, { duration: 0 });
    })();

    return () => {
      setScroll(null);
      if (instance) instance.destroy();
    };
  }, [location.pathname]);

  return (
    <SmoothScrollContext.Provider value={scroll}>
      <div ref={containerRef} data-scroll-container>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
}