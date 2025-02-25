import { Note } from '@/types/note.type';

const cMajorNaturalScale: Note[] = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
const dMajorNaturalScale: Note[] = ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5'];
const eMajorNaturalScale: Note[] = [
  'E4',
  'F#4',
  'G#4',
  'A4',
  'B4',
  'C#5',
  'D#5',
];
const fMajorNaturalScale: Note[] = ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5'];
const gMajorNaturalScale: Note[] = ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5'];
const aMajorNaturalScale: Note[] = [
  'A4',
  'B4',
  'C#5',
  'D5',
  'E5',
  'F#5',
  'G#5',
];
const bMajorNaturalScale: Note[] = [
  'B4',
  'C#5',
  'D#5',
  'E5',
  'F#5',
  'G#5',
  'A#5',
];

export const naturalScales = {
  cMajor: cMajorNaturalScale,
  dMajor: dMajorNaturalScale,
  eMajor: eMajorNaturalScale,
  fMajor: fMajorNaturalScale,
  gMajor: gMajorNaturalScale,
  aMajor: aMajorNaturalScale,
  bMajor: bMajorNaturalScale,
};
