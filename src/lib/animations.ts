import { Variants } from 'framer-motion';

// Base transitions for reuse
const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 24,
} as const;

const fadeTransition = {
  duration: 0.4,
  ease: [0.15, 0.45, 0.25, 0.95],
} as const;

// Optimize variants with hardware acceleration
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Use transform-based animations for better performance
export const slideUp: Variants = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { duration: 0.5 },
  },
};

// Add willChange prop for better browser optimization
export const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
    willChange: 'transform',
  },
};

// Performance optimized variants
export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateY(30px)' },
  visible: (i: number) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      ...fadeTransition,
      delay: i * 0.2,
    },
    willChange: 'transform, opacity',
  }),
};

export const staggeredContainerTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

export const listItemTransition: Variants = {
  hidden: { opacity: 0, transform: 'translateX(-20px)' },
  visible: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: springTransition,
    willChange: 'transform, opacity',
  },
};

export const iconContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

export const serviceCardIconAnimation: Variants = {
  hidden: { opacity: 0, transform: 'scale(0.8)' },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      ...springTransition,
      stiffness: 260,
      damping: 20,
    },
    willChange: 'transform',
  },
};

// Optimized container animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

// Hardware accelerated item animations
export const itemVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: springTransition,
    willChange: 'transform, opacity',
  },
};

export const fadeInAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Transform-based icon animations
export const iconVariants: Variants = {
  hidden: { opacity: 0, transform: 'scale(0.8)' },
  visible: (i: number) => ({
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      ...fadeTransition,
      delay: 0.3 + i * 0.1,
    },
    willChange: 'transform',
  }),
};

export const footerFadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

// Optimized link animations
export const desktopLinkVariants: Variants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  animate: (i: number) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      ...fadeTransition,
      delay: 0.1 * i,
    },
    willChange: 'transform',
  }),
  hover: {
    transform: 'translateY(-2px)',
    transition: springTransition,
  },
};

// Optimized quick links container
export const quickLinkContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

// Hardware accelerated quick link items
export const quickLinkItemVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateX(-5px)' },
  visible: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: springTransition,
    willChange: 'transform',
  },
};

export const staggeredVisibilityTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const sidebarListItemAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

// Optimized social icon animations
export const socialIconAnimation: Variants = {
  hidden: { opacity: 0, transform: 'scale(0)' },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: springTransition,
    willChange: 'transform',
  },
};

// Performance optimized card animations
export const fadeInOutVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(15px) scale(0.97)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    transition: fadeTransition,
    willChange: 'transform, opacity',
  },
  hover: {
    transform: 'translateY(-4px) scale(1.02)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Only export what's needed from framer-motion
export {
  AnimatePresence,
  useAnimation,
  useInView,
  domAnimation,
  LazyMotion,
  m as motion,
} from 'framer-motion';
