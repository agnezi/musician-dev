'use client';

import styles from '../page.module.css';
import GuitarFretboard from './fretboard';
import { useState } from 'react';

export default function FretboardByScales() {
  // Define major scales
  const majorScales: Record<string, string[]> = {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  };

  const [selectedNotes, setSelectedNotes] = useState<string[]>(majorScales.C); // Default to C Major

  const handleScaleRadioChange = (scale: string) => {
    setSelectedNotes(majorScales[scale]); // Set notes for the selected scale
  };

  return (
    <div className={styles.page}>
      <main>
        <div>
          <h3>Select a Major Scale:</h3>
          {Object.keys(majorScales).map(scale => (
            <label key={scale} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="scale"
                value={scale}
                checked={selectedNotes.every(note =>
                  majorScales[scale].includes(note)
                )}
                onChange={() => handleScaleRadioChange(scale)}
              />
              {scale} Major
            </label>
          ))}
        </div>
        <div>
          <h3>Selected Notes:</h3>
          {selectedNotes.map(note => (
            <span key={note} style={{ marginRight: '10px' }}>
              {note}
            </span>
          ))}
        </div>
        <div>
          <GuitarFretboard
            frets={24}
            strings={6}
            showNotes={true}
            tuning={['E', 'A', 'D', 'G', 'B', 'E']} // Standard tuning
            showOnly={selectedNotes}
          />
        </div>
      </main>
    </div>
  );
}
