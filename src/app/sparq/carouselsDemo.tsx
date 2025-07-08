'use client';

import Carousel from './carousel';
import cn from 'classnames';

export const CarouselsDemo = () => {
  const cards = [1, 2, 3, 4, 5];
  const randomItems = ['test', 42, <span>I'm a span</span>];
  return (
    <section
      className={cn(
        'flex flex-col items-center gap-16',
        'p-4 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-4'
      )}
    >
      <div>
        <h2>Default</h2>
        <Carousel>{cards}</Carousel>
      </div>
      <div>
        <h2>1s Delay</h2>
        <Carousel delay={1000}>{cards}</Carousel>
      </div>
      <div>
        <h2>3s Delay</h2>
        <Carousel delay={3000}>{cards}</Carousel>
      </div>
      <div>
        <h2>Variety of Items</h2>
        <Carousel delay={1000}>{randomItems}</Carousel>
      </div>
      <div>
        <h2>Two Items</h2>
        <Carousel delay={1000}>{[1, 2]}</Carousel>
      </div>
      <div>
        <h2>One Item</h2>
        <Carousel delay={1000}>{[1]}</Carousel>
      </div>
      <div>
        <h2>Empty Carousel</h2>
        <Carousel />
      </div>
    </section>
  );
};
