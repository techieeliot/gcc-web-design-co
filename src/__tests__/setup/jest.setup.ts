import '@testing-library/jest-dom';
import React from 'react';

// Set environment variables
process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = 'test-cloud-name';

// Mock next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) =>
    React.createElement('img', { ...props, alt: props.alt || '' }),
}));

// Mock next-cloudinary
jest.mock('next-cloudinary', () => ({
  CldImage: (props: any) =>
    React.createElement('img', { ...props, alt: props.alt || '' }),
}));
