import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>Links</h1>
      </header>
      <main className={styles.main}>
        <ol>
          <li>
            <Link href={'/scales'}>Scales</Link>
          </li>
          <li>
            <Link href={'/chords'}>Chords</Link>
          </li>
          <li>
            <Link href={'/fretboard'}>Fretboard</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
