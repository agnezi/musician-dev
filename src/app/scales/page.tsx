'use client';

import styles from './page.module.css';
import { Note } from '@/types/note.type';
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

export default function Page() {
  const cMajorScale: Note[] = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
  const dMajorScale: Note[] = ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5'];
  const eMajorScale: Note[] = ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5'];
  const fMajorScale: Note[] = ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5'];
  const gMajorScale: Note[] = ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5'];
  const aMajorScale: Note[] = ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5'];
  const bMajorScale: Note[] = ['B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A#5'];

  const majorScales: Array<{ scaleName: string; notes: Note[] }> = [
    {
      scaleName: 'C Major',
      notes: cMajorScale,
    },
    {
      scaleName: 'D Major',
      notes: dMajorScale,
    },
    {
      scaleName: 'E Major',
      notes: eMajorScale,
    },
    {
      scaleName: 'F Major',
      notes: fMajorScale,
    },
    {
      scaleName: 'G Major',
      notes: gMajorScale,
    },
    {
      scaleName: 'A Major',
      notes: aMajorScale,
    },
    {
      scaleName: 'B Major',
      notes: bMajorScale,
    },
  ];

  function playScaleOf(notes: Note[]) {
    const now = Tone.now();
    notes.forEach((note, index) => {
      synth.triggerAttackRelease(note, '8n', now + index * 0.5);
    });
  }

  return (
    <div className={styles.page}>
      <header>
        <h1>Major Natural scales notes</h1>
      </header>
      <main className={styles.main}>
        <ol>
          {majorScales.map(scale => (
            <li key={scale.scaleName}>
              <button
                role="button"
                value={scale.scaleName}
                className={styles.scaleButton}
                onClick={() => playScaleOf(scale.notes)}
              >
                {scale.scaleName}
              </button>
              {scale.notes.map((note, index) => (
                <span key={note}>
                  {note} {scale.notes.length - 1 === index ? '' : '-'}{' '}
                </span>
              ))}
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
