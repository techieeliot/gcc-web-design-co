'use client';

import Carousel from './carousel';

export const Carousels = () => {
  const cards = [1, 2, 3, 4, 5];
  const randomItems = ['test', 42, <span>I'm a span</span>];
  return (
    <div className="flex flex-col gap-16">
      <Carousel>{cards}</Carousel>
      <Carousel delay={1000}>{cards}</Carousel>
      <Carousel delay={1000}>{randomItems}</Carousel>
      <Carousel />
      <Carousel delay={1000}>{[1, 2]}</Carousel>
      <Carousel delay={1000}>{[1]}</Carousel>
    </div>
  );
};
