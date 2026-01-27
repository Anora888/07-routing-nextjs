import Link from "next/link";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to NoteHub</h1>
      <p className={styles.description}>Manage your notes easily!</p>
      <Link href="/notes/filter/all">Go to Notes</Link>
    </div>
  );
}