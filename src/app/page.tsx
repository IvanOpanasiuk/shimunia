import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>It is my site and blog</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Shimunia
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          // className={styles.logo}
          src="/me.jpg"
          alt="Shimunia"
          width={450}
          height={600}
          priority
        />
      </div>
    </main>
  );
}
