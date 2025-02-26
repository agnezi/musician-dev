'use client';

import styles from './page.module.css';
import { Note } from '@/types/note.type';

import { useState } from 'react';
import * as Tone from 'tone';
import Link from 'next/link';
import { majorNaturalHarmonicField } from '@/utils/harmonicFields';

export default function Page() {
  const [isAudioReady, setIsAudioReady] = useState(false);

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
          {majorNaturalHarmonicField.map(scale => (
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
