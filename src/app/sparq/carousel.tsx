'use client';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';

type CarouselProps = {
  children?: ReactNode[];
  delay?: number;
};
const Carousel = ({ delay = 0, children = [] }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const cards = useMemo(() => children, []);

  useEffect(() => {
    if (!delay || cards.length === 0) {
      setIsRunning(false);
      return;
    }

    if (!isRunning) {
      return;
    }

    const id = setInterval(
      () => {
        handleNext();
      },

      delay
    );
    return () => clearInterval(id);
  }, [isRunning, delay, cards]);

  function handlePrev() {
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }

  function handleNext() {
    setIndex((i) => (i + 1) % cards.length);
  }

  const activeCard = cards[index];

  return (
    <div className={cn('flex flex-col items-baseline gap-4')}>
      {cards.length > 0 ? (
        <>
          <div
            className={cn(
              'flex items-center justify-center text-center w-64',
              'font-bold text-black p-2 rounded-lg h-64',
              'border-2 border-black shadow-lg'
            )}
            aria-live="polite"
            tabIndex={0}
            role="status"
          >
            {activeCard}
          </div>
          {cards.length >= 2 ? (
            <div
              className={cn(
                '[&>button]:w-32 [&>button]:bg-blue-700 [&>button]:rounded-xl',
                '[&>button]:border-2 [&>button]:border-black [&>button]:text-white [&>button]:h-16'
              )}
            >
              <button
                type="button"
                onClick={handlePrev}
                className="disabled:bg-slate-200 disabled:text-black"
                aria-label="Go to previous card"
              >
                {'< '}Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="disabled:bg-slate-200 disabled:text-black"
                aria-label="Go to next card"
              >
                Next{' >'}
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
