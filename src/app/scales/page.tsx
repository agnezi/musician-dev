'use client';

import { majorNaturalHarmonicField } from '@/utils/harmonicFields';
import styles from './page.module.css';
import { Note } from '@/types/note.type';
import Link from 'next/link';
import { useState } from 'react';
import * as Tone from 'tone';

export default function Page() {
  const [isAudioReady, setIsAudioReady] = useState(false);

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
          {majorNaturalHarmonicField.map(scale => (
            <li key={scale.scaleName}>
              <button
                value={scale.scaleName}
                className={styles.scaleButton}
                onClick={() => (scale.notes ? playScaleOf(scale.notes) : null)}
              >
                {scale.scaleName}
              </button>
              <div className={styles.breakLine}>
                <br />
              </div>
              {scale.notes?.map((note, index) => (
                <span key={note}>
                  {note}{' '}
                  {Array.isArray(scale.notes) &&
                  scale.notes.length - 1 === index
                    ? ''
                    : '-'}{' '}
                </span>
              ))}
              <div className={styles.breakLine}>
                <br />
              </div>
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
