'use client';

import { naturalScalesChords } from '@/utils/chords';
import styles from './page.module.css';
import { Chord, Note } from '@/types/note.type';

import { useState } from 'react';
import * as Tone from 'tone';
import Link from 'next/link';

export default function Page() {
  const [isAudioReady, setIsAudioReady] = useState(false);

  const majorScales: Array<{
    scaleName: string;
    chords?: Chord[];
  }> = [
    {
      scaleName: 'C Major',
      chords: naturalScalesChords.cMajor,
    },
    {
      scaleName: 'D Major',
      chords: naturalScalesChords.dMajor,
    },
    {
      scaleName: 'E Major',
      chords: naturalScalesChords.eMajor,
    },
    {
      scaleName: 'F Major',
      chords: naturalScalesChords.fMajor,
    },
    {
      scaleName: 'G Major',
      chords: naturalScalesChords.gMajor,
    },
    {
      scaleName: 'A Major',
      chords: naturalScalesChords.aMajor,
    },
    {
      scaleName: 'B Major',
      chords: naturalScalesChords.bMajor,
    },
  ];

  async function playChordOf(notes: Note[]) {
    if (!isAudioReady) {
      await Tone.start();
      setIsAudioReady(true);
    }

    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    notes.forEach((note, index) => {
      synth.triggerAttack(note, now + index * 0.5);

      if (index === notes.length - 1) {
        synth.triggerRelease(notes, now + (index + notes.length) * 0.5);
      }
    });
  }

  return (
    <div className={styles.page}>
      <header>
        <h1>Major Natural scale chords</h1>
      </header>
      <main className={styles.main}>
        <ol>
          {majorScales.map(scale => (
            <li key={scale.scaleName}>
              {scale.scaleName}
              <ul className={styles.chordListPlayable}>
                {scale.chords?.map(chord => (
                  <li key={chord.name}>
                    <button
                      value={chord.name}
                      className={styles.scaleButton}
                      onClick={() => playChordOf(chord.notes)}
                    >
                      {chord.name}
                    </button>
                    <br />
                    <span>{chord.notes.join('-')}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </main>
      <footer>
        <Link href="/">Back to home</Link>
      </footer>
    </div>
  );
}
