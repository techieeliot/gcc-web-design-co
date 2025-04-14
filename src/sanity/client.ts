import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '0xn9tbus',
  dataset: 'production',
  apiVersion: '2025-04-13',
  useCdn: false,
});
