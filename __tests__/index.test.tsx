import Sandbox from '@/pages/sandbox';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  beforeEach(() => {
    render(<Sandbox />);
  });

  it('should render the title', () => {
    const title = screen.getByRole('heading');
    expect(title.textContent).toBe('Hello react!');
  });
});