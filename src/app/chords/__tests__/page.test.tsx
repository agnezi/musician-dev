import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Page from '@/app/chords/page';
import {
  toneNowMock,
  toneStartMock,
  toneTriggerAttackMock,
  toneTriggerReleaseMock,
} from '../../../../jest.setup';

describe('chords page', () => {
  it('renders chords page unchanged', () => {
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
    expect(buttons[0]).toHaveAttribute('value', 'C major chord');
  });

  it('should call tone.js toneTriggerAttack when button click', async () => {
    render(<Page />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('value', 'C major chord');
    fireEvent.click(buttons[0]);
    await waitFor(() => {
      expect(toneStartMock).toHaveBeenCalledTimes(1);
    });
    expect(toneNowMock).toHaveBeenCalledTimes(1);

    expect(toneTriggerAttackMock).toHaveBeenCalledWith('C4', 1234);
    expect(toneTriggerAttackMock).toHaveBeenCalledWith('E4', 1234.5);
    expect(toneTriggerAttackMock).toHaveBeenCalledWith('G4', 1235);
    expect(toneTriggerReleaseMock).toHaveBeenNthCalledWith(
      1,
      ['C4', 'E4', 'G4'],
      1236.5
    );
  });
});
