import { useEffect, useRef } from "react";

/**
 * IntersectionObserver-based reveal hook.
 * Adds `is-visible` class when the element enters the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
