import React, { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    const trailer = document.getElementById('trailer');

    const handleMouseMove = (e) => {
      // every event passes the object it has which has what the event occurred
      trailer.style.opacity = 1;
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      trailer.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      trailer.style.opacity = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="trailer"
      className="w-[0px] h-[0px]"
      style={{
        backgroundColor: 'var(--primary-color, rgba(64,139,255,0.8))',
        borderRadius: '50%',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 9999,
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 500ms ease, transform 0.1s ease',
        boxShadow: '0 0 90px 30px var(--primary-color, rgba(64,139,255,0.5))',
      }}
    />
  );
};

export default CursorTrail;
