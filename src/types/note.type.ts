export type Note =
  | `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
  | `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}#${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
  | `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}b${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;

export type Chord = {
  name: string;
  notes: Note[];
};
