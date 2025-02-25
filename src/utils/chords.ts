import { Chord } from '@/types/note.type';

const cMajorScaleChords: Chord[] = [
  {
    name: 'C major chord',
    notes: ['C4', 'E4', 'G4'],
  },
  {
    name: 'D minor chord',
    notes: ['D4', 'F4', 'A4'],
  },
  {
    name: 'E minor chord',
    notes: ['E4', 'G4', 'B4'],
  },
  {
    name: 'F major chord',
    notes: ['F4', 'A4', 'C5'],
  },
  {
    name: 'G major chord',
    notes: ['G4', 'B4', 'D5'],
  },
  {
    name: 'A minor chord',
    notes: ['A4', 'C5', 'E5'],
  },
  {
    name: 'B semi-diminished chord',
    notes: ['B4', 'D5', 'F5'],
  },
];

const dMajorScaleChords: Chord[] = [
  {
    name: 'D major chord',
    notes: ['D4', 'F#4', 'A4'],
  },
  {
    name: 'E minor chord',
    notes: ['E4', 'G4', 'B4'],
  },
  {
    name: 'F# minor chord',
    notes: ['F#4', 'A4', 'C#5'],
  },
  {
    name: 'G major chord',
    notes: ['G4', 'B4', 'D5'],
  },
  {
    name: 'A major chord',
    notes: ['A4', 'C#5', 'E5'],
  },
  {
    name: 'B minor chord',
    notes: ['B4', 'D5', 'F#5'],
  },
  {
    name: 'C# semi-diminished chord',
    notes: ['C#5', 'E5', 'G5'],
  },
];

const eMajorScaleChords: Chord[] = [
  {
    name: 'E major chord',
    notes: ['E4', 'G#4', 'B4'],
  },
  {
    name: 'F# minor chord',
    notes: ['F#4', 'A4', 'C#5'],
  },
  {
    name: 'G# minor chord',
    notes: ['G#4', 'B4', 'D#5'],
  },
  {
    name: 'A major chord',
    notes: ['A4', 'C#5', 'E5'],
  },
  {
    name: 'B major chord',
    notes: ['B4', 'D#5', 'F#5'],
  },
  {
    name: 'C# minor chord',
    notes: ['C#5', 'E5', 'G#5'],
  },
  {
    name: 'D# semi-diminished chord',
    notes: ['D#5', 'F#5', 'A5'],
  },
];

const fMajorScaleChords: Chord[] = [
  {
    name: 'F major chord',
    notes: ['F4', 'A4', 'C5'],
  },
  {
    name: 'G minor chord',
    notes: ['G4', 'Bb4', 'D5'],
  },
  {
    name: 'A minor chord',
    notes: ['A4', 'C5', 'E5'],
  },
  {
    name: 'Bb major chord',
    notes: ['Bb4', 'D5', 'F5'],
  },
  {
    name: 'C major chord',
    notes: ['C5', 'E5', 'G5'],
  },
  {
    name: 'D minor chord',
    notes: ['D5', 'F5', 'A5'],
  },
  {
    name: 'E semi-diminished chord',
    notes: ['E5', 'G5', 'Bb5'],
  },
];

const gMajorScaleChords: Chord[] = [
  {
    name: 'G major chord',
    notes: ['G4', 'B4', 'D5'],
  },
  {
    name: 'A minor chord',
    notes: ['A4', 'C5', 'E5'],
  },
  {
    name: 'B minor chord',
    notes: ['B4', 'D5', 'F#5'],
  },
  {
    name: 'C major chord',
    notes: ['C5', 'E5', 'G5'],
  },
  {
    name: 'D major chord',
    notes: ['D5', 'F#5', 'A5'],
  },
  {
    name: 'E minor chord',
    notes: ['E5', 'G5', 'B5'],
  },
  {
    name: 'F# semi-diminished chord',
    notes: ['F#5', 'A5', 'C6'],
  },
];

const aMajorScaleChords: Chord[] = [
  {
    name: 'A major chord',
    notes: ['A4', 'C#5', 'E5'],
  },
  {
    name: 'B minor chord',
    notes: ['B4', 'D5', 'F#5'],
  },
  {
    name: 'C# minor chord',
    notes: ['C#5', 'E5', 'G#5'],
  },
  {
    name: 'D major chord',
    notes: ['D5', 'F#5', 'A5'],
  },
  {
    name: 'E major chord',
    notes: ['E5', 'G#5', 'B5'],
  },
  {
    name: 'F# minor chord',
    notes: ['F#5', 'A5', 'C#6'],
  },
  {
    name: 'G# semi-diminished chord',
    notes: ['G#5', 'B5', 'D6'],
  },
];

const bMajorScaleChords: Chord[] = [
  {
    name: 'B major chord',
    notes: ['B4', 'D#5', 'F#5'],
  },
  {
    name: 'C# minor chord',
    notes: ['C#5', 'E5', 'G#5'],
  },
  {
    name: 'D# minor chord',
    notes: ['D#5', 'F#5', 'A#5'],
  },
  {
    name: 'E major chord',
    notes: ['E5', 'G#5', 'B5'],
  },
  {
    name: 'F# major chord',
    notes: ['F#5', 'A#5', 'C#6'],
  },
  {
    name: 'G# minor chord',
    notes: ['G#5', 'B5', 'D#6'],
  },
  {
    name: 'A# semi-diminished chord',
    notes: ['A#5', 'C#6', 'E6'],
  },
];

export const naturalScalesChords = {
  cMajor: cMajorScaleChords,
  dMajor: dMajorScaleChords,
  eMajor: eMajorScaleChords,
  fMajor: fMajorScaleChords,
  gMajor: gMajorScaleChords,
  aMajor: aMajorScaleChords,
  bMajor: bMajorScaleChords,
};
