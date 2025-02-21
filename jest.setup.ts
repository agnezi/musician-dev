import '@testing-library/jest-dom';

export const toneTriggerAttackRelease = jest.fn();
export const toneNowMock = jest.fn(() => 1234);
export const toneStartMock = jest.fn();

jest.mock('tone', () => ({
  start: toneStartMock,
  Synth: jest.fn().mockImplementation(() => ({
    toDestination: () => ({
      triggerAttackRelease: toneTriggerAttackRelease,
    }),
  })),
  now: toneNowMock,
}));
