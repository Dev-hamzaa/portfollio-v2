import React, { useEffect, useRef, useState } from "react";

const lerp = (start, end, factor) => start + (end - start) * factor;

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const render = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const animate = () => {
      const ease = 0.15;
      render.current = {
        x: lerp(render.current.x, pos.current.x, ease),
        y: lerp(render.current.y, pos.current.y, ease),
      };
      const dot = document.getElementById("cursor-dot");
      const ring = document.getElementById("cursor-ring");
      if (dot) {
        dot.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${render.current.x}px, ${render.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const handleOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], .btn, [data-cursor-hover]");
      setHover(!!target);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  return (
    <div
      className="custom-cursor-wrap"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    >
      <div id="cursor-dot" className="custom-cursor-dot" />
      <div id="cursor-ring" className={`custom-cursor-ring ${hover ? "custom-cursor-ring--hover" : ""}`} />
    </div>
  );
};

export default CustomCursor;
