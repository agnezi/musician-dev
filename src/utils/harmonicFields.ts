import { HarmonicField } from '@/types/note.type';
import { naturalScalesChords } from './chords';
import { naturalScales } from './scales';

export const majorNaturalHarmonicField: HarmonicField = [
  {
    scaleName: 'C Major',
    chords: naturalScalesChords.cMajor,
    notes: naturalScales.cMajor,
  },
  {
    scaleName: 'D Major',
    chords: naturalScalesChords.dMajor,
    notes: naturalScales.dMajor,
  },
  {
    scaleName: 'E Major',
    chords: naturalScalesChords.eMajor,
    notes: naturalScales.eMajor,
  },
  {
    scaleName: 'F Major',
    chords: naturalScalesChords.fMajor,
    notes: naturalScales.fMajor,
  },
  {
    scaleName: 'G Major',
    chords: naturalScalesChords.gMajor,
    notes: naturalScales.gMajor,
  },
  {
    scaleName: 'A Major',
    chords: naturalScalesChords.aMajor,
    notes: naturalScales.aMajor,
  },
  {
    scaleName: 'B Major',
    chords: naturalScalesChords.bMajor,
    notes: naturalScales.bMajor,
  },
];
