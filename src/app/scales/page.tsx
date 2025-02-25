'use client';

import styles from './page.module.css';
import { Note } from '@/types/note.type';
import { naturalScales } from '@/utils/scales';
import Link from 'next/link';
import { useState } from 'react';
import * as Tone from 'tone';

export default function Page() {
  const [isAudioReady, setIsAudioReady] = useState(false);

  const majorScales: Array<{
    scaleName: string;
    notes: Note[];
  }> = [
    {
      scaleName: 'C Major',
      notes: naturalScales.cMajor,
    },
    {
      scaleName: 'D Major',
      notes: naturalScales.dMajor,
    },
    {
      scaleName: 'E Major',
      notes: naturalScales.eMajor,
    },
    {
      scaleName: 'F Major',
      notes: naturalScales.fMajor,
    },
    {
      scaleName: 'G Major',
      notes: naturalScales.gMajor,
    },
    {
      scaleName: 'A Major',
      notes: naturalScales.aMajor,
    },
    {
      scaleName: 'B Major',
      notes: naturalScales.bMajor,
    },
  ];

  async function playScaleOf(notes: Note[]) {
    if (!isAudioReady) {
      await Tone.start();
      setIsAudioReady(true);
    }

    const synth = new Tone.Synth().toDestination();
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
      <footer>
        <Link href="/">Back to home</Link>
      </footer>
    </div>
  );
}
