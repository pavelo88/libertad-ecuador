'use client';
import { useEffect, useRef, useState } from 'react';
import ProgramCard from './ProgramCard';
import { Icon } from './Icons';

export default function AxisCarousel({ programs, desktopVisible = 4 }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = programs.length;

  // Calculate how many cards are visible based on screen width
  const [visible, setVisible] = useState(desktopVisible);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 900) setVisible(2);
      else if (window.innerWidth < 1200) setVisible(3);
      else setVisible(desktopVisible);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [desktopVisible]);

  const maxIdx = Math.max(0, total - visible);

  function next() { setIdx(i => (i >= maxIdx ? 0 : i + 1)); }
  function prev() { setIdx(i => (i <= 0 ? maxIdx : i - 1)); }

  // Auto-advance every 3s
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, [paused, maxIdx, visible]);

  const cardWidthPct = 100 / visible;

  return (
    <div
      className="axis-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="axis-carousel-track-wrap" style={{ overflow: 'hidden' }}>
        <div
          className="axis-carousel-track"
          style={{
            display: 'flex',
            transition: 'transform .4s cubic-bezier(.4,0,.2,1)',
            transform: `translateX(-${idx * cardWidthPct}%)`,
            willChange: 'transform',
          }}
        >
          {programs.map(p => (
            <div
              key={p.id}
              style={{
                minWidth: `${cardWidthPct}%`,
                maxWidth: `${cardWidthPct}%`,
                boxSizing: 'border-box',
                padding: '0 8px',
              }}
            >
              <ProgramCard p={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="axis-carousel-controls">
        <button className="carousel-arrow" onClick={prev} aria-label="Anterior">
          <Icon name="ChevronLeft" size={18} />
        </button>
        <div className="carousel-dots">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === idx ? 'active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Siguiente">
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}
