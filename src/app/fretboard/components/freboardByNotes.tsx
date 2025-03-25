'use client';

import styles from '../page.module.css';
import GuitarFretboard from './fretboard';
import { useState } from 'react';

export default function FreboardByNotes() {
  const notes = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
  ];
  const [selectedNotes, setSelectedNotes] = useState<string[]>(['C']);

  const handleCheckboxChange = (note: string) => {
    setSelectedNotes(prev =>
      prev.includes(note) ? prev.filter(n => n !== note) : [...prev, note]
    );
  };
  return (
    <div className={styles.page}>
      <main>
        <div>
          {notes.map(note => (
            <label key={note} style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                checked={selectedNotes.includes(note)}
                onChange={() => handleCheckboxChange(note)}
              />
              {note}
            </label>
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
