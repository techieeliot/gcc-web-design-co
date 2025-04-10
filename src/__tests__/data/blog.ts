import { Post } from '@/app/blog/types';

export const mockBlog: Post = {
  slug: 'test',
  title: 'Test Post',
  publishedAt: '2025-04-01',
  updatedAt: '2025-04-10',
  summary: 'This is a test post',
  image:
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  content: '# This is the content of the test post',
  author: {
    name: 'Test Author',
    image:
      'https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdyaXRlcnxlbnwwfHwwfHx8Mg%3D%3D',
  },
};
