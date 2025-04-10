import { Button } from '@/components/ui/button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });
});
