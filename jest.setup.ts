import '@testing-library/jest-dom';

export const toneTriggerAttackReleaseMock = jest.fn();
export const toneTriggerAttackMock = jest.fn();
export const toneTriggerReleaseMock = jest.fn();
export const toneNowMock = jest.fn(() => 1234);
export const toneStartMock = jest.fn();

jest.mock('tone', () => ({
  start: toneStartMock,
  PolySynth: jest.fn().mockImplementation(() => ({
    toDestination: () => ({
      triggerAttack: toneTriggerAttackMock,
      triggerRelease: toneTriggerReleaseMock,
    }),
  })),
  Synth: jest.fn().mockImplementation(() => ({
    toDestination: () => ({
      triggerAttackRelease: toneTriggerAttackReleaseMock,
      triggerAttack: toneTriggerAttackMock,
    }),
  })),
  now: toneNowMock,
}));
