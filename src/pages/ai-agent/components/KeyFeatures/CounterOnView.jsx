import React, { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const CounterOnView = ({
  end = 150000, // final value (150000 for 150K+)
  duration = 1500, // ms
  suffix = 'K+', // shown suffix
  formatter, // optional custom formatter
  className = '',
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setVisible(true);
          hasAnimatedRef.current = true;
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const startTs = performance.now();

    const tick = (now) => {
      const elapsed = now - startTs;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const current = Math.floor(start + (end - start) * eased);
      setValue(current);
      if (t < 1) requestAnimationFrame(tick);
      else setValue(end);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);

  const defaultFormatter = (n) => {
    // convert to K with no decimals (e.g., 150000 -> 150K+)
    const k = Math.round(n / 1000);
    return `${k}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formatter ? formatter(value) : defaultFormatter(value)}
    </span>
  );
};

export default CounterOnView;
