import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Page from '@/app/scales/page';
import {
  toneNowMock,
  toneStartMock,
  toneTriggerAttackRelease,
} from '../../../../jest.setup';

describe('scales page', () => {
  it('renders scales page unchanged', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it('should render component when page loads', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should have a button for each scale', () => {
    render(<Page />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('value', 'C Major');
  });

  it('should call tone.js toneTriggerAttackRelease when button click', async () => {
    render(<Page />);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    await waitFor(() => {
      expect(toneStartMock).toHaveBeenCalledTimes(1);
    });
    expect(toneNowMock).toHaveBeenCalledTimes(1);
    expect(toneTriggerAttackRelease).toHaveBeenNthCalledWith(
      1,
      'C4',
      '8n',
      1234
    );
  });
});
