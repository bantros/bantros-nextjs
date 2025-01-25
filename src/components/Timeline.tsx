'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineProps {
  duration: number;
  progress: number;
}

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Timeline = ({ duration, progress }: TimelineProps) => {
  const [count, setCount] = useState(progress);
  const [ended, setEnded] = useState(false);

  useInterval(
    () => {
      const newCount = count + 1000;
      if (newCount >= duration) {
        setEnded(true);
      }
      setCount(newCount);
    },
    !ended ? 1000 : null
  );

  const getSize = () => {
    const value = count / duration;
    return Math.max(0, Math.min(value, 1));
  };

  return (
    <div
      className='absolute top-0 left-0 w-full h-full bg-white/10 origin-left transition-transform duration-1000 ease-linear pointer-events-none'
      style={{ transform: `scale(${getSize()}, 1)` }}
    />
  );
};

export default Timeline;
