import React, { useRef, useEffect } from 'react';

const GuitarFretboard = ({
  frets = 12,
  strings = 6,
  width = 1024,
  height = 260,
  showNotes = true,
  tuning = ['E', 'A', 'D', 'G', 'B', 'E'],
  showOnly = ['C'],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Musical notes in order
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

  // Get note at specific fret and string
  const getNote = (string: number, fret: number) => {
    const openNote = tuning[string];
    const openIndex = notes.indexOf(openNote);
    const noteIndex = (openIndex + fret) % notes.length;
    return notes[noteIndex];
  };

  const noteColors: { [key: string]: string } = {
    A: '#FFB3BA', // Pastel Red
    'A#': '#FFDFBA', // Pastel Orange
    B: '#FFFFBA', // Pastel Yellow
    C: '#BAFFC9', // Pastel Green
    'C#': '#BAE1FF', // Pastel Light Blue
    D: '#D5BAFF', // Pastel Purple
    'D#': '#FFB3E6', // Pastel Pink
    E: '#FFDAC1', // Pastel Peach
    F: '#B3E5FC', // Pastel Cyan
    'F#': '#E1B3FF', // Pastel Lavender
    G: '#FFCCF9', // Pastel Magenta
    'G#': '#C9C9FF', // Pastel Periwinkle
  };

  // Function to get the color for a note
  const noteColor = (note: string) => {
    return noteColors[note] || '#FFFFFF'; // Default to white if note is not found
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const ctx = canvas.getContext('2d');
      const padding = 20;
      const fretboardWidth = width - padding * 2;
      const fretboardHeight = height - padding * 2;
      const stringSpacing = fretboardHeight / (strings - 1);
      const fretSpacing = fretboardWidth / frets;
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw fretboard background
        ctx.fillStyle = '#8B4513'; // Wooden color
        ctx.fillRect(padding, padding, fretboardWidth, fretboardHeight);

        // Draw strings
        ctx.strokeStyle = '#DDD';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < strings; i++) {
          const y = padding + i * stringSpacing;
          ctx.beginPath();
          ctx.moveTo(padding, y);
          ctx.lineTo(padding + fretboardWidth, y);
          ctx.stroke();

          // Draw open string note
          if (showNotes) {
            ctx.fillStyle = '#FFF';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(tuning[i], padding - 15, y + 5);
          }
        }

        // Draw frets
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        for (let i = 0; i <= frets; i++) {
          const x = padding + i * fretSpacing;
          ctx.beginPath();
          ctx.moveTo(x, padding);
          ctx.lineTo(x, padding + fretboardHeight);

          // Make the nut (0th fret) thicker
          if (i === 0) {
            ctx.lineWidth = 3;
          } else {
            ctx.lineWidth = 1;
          }
          ctx.stroke();

          // Draw fret numbers
          if (i > 0 && i % 2 === 0) {
            ctx.fillStyle = '#FFF';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(i.toString(), x - fretSpacing / 2, height - 5);
          }
        }

        // Draw fret markers (dots)
        const dotPositions = [3, 5, 7, 9, 12]; // Common fret marker positions
        const dotRadius = 5;

        dotPositions.forEach(fret => {
          if (fret <= frets) {
            const x = padding + (fret - 0.5) * fretSpacing;

            // Double dots at 12th fret
            if (fret === 12) {
              ctx.fillStyle = '#FFF';
              ctx.beginPath();
              ctx.arc(
                x,
                padding + fretboardHeight / 3,
                dotRadius,
                0,
                Math.PI * 2
              );
              ctx.fill();
              ctx.beginPath();
              ctx.arc(
                x,
                padding + (fretboardHeight * 2) / 3,
                dotRadius,
                0,
                Math.PI * 2
              );
              ctx.fill();
            } else {
              ctx.fillStyle = '#FFF';
              ctx.beginPath();
              ctx.arc(
                x,
                padding + fretboardHeight / 2,
                dotRadius,
                0,
                Math.PI * 2
              );
              ctx.fill();
            }
          }
        });

        // Draw notes on frets if enabled
        if (showNotes) {
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          for (let string = 0; string < strings; string++) {
            for (let fret = 1; fret <= frets; fret++) {
              const x = padding + (fret - 0.5) * fretSpacing;
              const y = padding + string * stringSpacing;
              const note = getNote(string, fret);

              // Skip drawing notes on marker frets to avoid clutter
              // if (!dotPositions.includes(fret)) {
              //   ctx.fillStyle = noteColor(note);
              //   ctx.beginPath();
              //   ctx.arc(x, y, 15, 0, Math.PI * 2);
              //   ctx.fill();

              //   ctx.fillStyle = '#000';
              //   ctx.fillText(note, x, y);
              // }

              if (showOnly.includes(note)) {
                ctx.fillStyle = noteColor(note);
                ctx.beginPath();
                ctx.arc(x, y, 15, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#000';
                ctx.fillText(note, x, y);
              }
            }
          }
        }
      }
    }
  }, [frets, strings, width, height, showNotes, tuning, showOnly]);

  return (
    <div style={{ margin: '20px' }}>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default GuitarFretboard;
