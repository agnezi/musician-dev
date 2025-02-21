import '@testing-library/jest-dom';

export const toneTriggerAttackRelease = jest.fn();
export const toneNow = jest.fn(() => 1234);

jest.mock('tone', () => ({
  Synth: jest.fn().mockImplementation(() => ({
    toDestination: () => ({
      triggerAttackRelease: toneTriggerAttackRelease,
    }),
  })),
  now: toneNow,
}));
