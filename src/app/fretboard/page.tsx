'use client';

import styles from './page.module.css';

import FreboardByNotes from './components/freboardByNotes';
import FretboardByScales from './components/freboardByScales';

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <div>
          <FreboardByNotes />
        </div>
        <div>
          <FretboardByScales />
        </div>
      </main>
    </div>
  );
}
