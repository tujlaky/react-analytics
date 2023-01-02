import Home from '@/pages/index';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render the title', () => {
    const title = screen.getByRole('heading');
    expect(title.textContent).toBe('Hello react!');
  });
});