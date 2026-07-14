import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Returns [ref, inView].
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once visible, stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return [ref, inView];
}
