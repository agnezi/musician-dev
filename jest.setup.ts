import '@testing-library/jest-dom';

export const toneTriggerAttackRelease = jest.fn();
export const toneNowMock = jest.fn(() => 1234);

jest.mock('tone', () => ({
  Synth: jest.fn().mockImplementation(() => ({
    toDestination: () => ({
      triggerAttackRelease: toneTriggerAttackRelease,
    }),
  })),
  now: toneNowMock,
}));
