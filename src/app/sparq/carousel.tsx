'use client';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';

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
      <div
        className={cn(
          'flex items-center justify-center text-center text-7xl',
          'font-bold text-slate-600 p-2 rounded-lg w-64 md:w-96 h-64',
          'border-2 border-black shadow-xl [&>span]:text-5xl'
        )}
        aria-live="polite"
        tabIndex={0}
        role="slide"
      >
        {cards.length > 0 ? (
          activeCard
        ) : (
          <p className="text-3xl flex items-center gap-2 text-red-700">
            <AlertTriangle className="hidden md:block" /> Empty Carousel
          </p>
        )}
      </div>
      {cards.length >= 2 ? (
        <div
          className={cn(
            'w-full flex justify-center',
            '[&>button]:w-28 [&>button]:md:w-48 [&>button]:h-12 [&>button]:bg-blue-700 [&>button]:rounded-xl',
            '[&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:gap-1',
            '[&>button]:border-2 [&>button]:border-black [&>button]:text-sm',
            '[&>button]:text-white [&>button]:font-bold'
          )}
        >
          <button
            type="button"
            onClick={handlePrev}
            className="disabled:bg-slate-200 disabled:text-black hover:bg-blue-800"
            aria-label="Go to previous card"
          >
            <ChevronLeft className="hidden md:block" /> Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="disabled:bg-slate-200 disabled:text-black hover:bg-blue-800"
            aria-label="Go to next card"
          >
            Next <ChevronRight className="hidden md:block" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
