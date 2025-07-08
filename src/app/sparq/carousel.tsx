'use client';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
              'flex items-center justify-center text-center text-6xl',
              'font-bold text-black p-2 rounded-lg w-64 md:w-96 h-64',
              'border-2 border-black shadow-xl [&>span]:text-3xl'
            )}
            aria-live="polite"
            tabIndex={0}
            role="slide"
          >
            {activeCard}
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
                <ArrowLeft className="hidden md:block" /> Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="disabled:bg-slate-200 disabled:text-black hover:bg-blue-800"
                aria-label="Go to next card"
              >
                Next <ArrowRight className="hidden md:block" />
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div
          className={cn(
            'flex items-center justify-center text-center text-3xl',
            'font-bold text-black p-2 rounded-lg w-64 h-64',
            'border-2 border-black shadow-xl'
          )}
        >
          No items available
        </div>
      )}
    </div>
  );
};

export default Carousel;
