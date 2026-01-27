"use client";
import Link from "next/link";
import styles from "@/styles/SidebarNotes.module.css";

const tags = ["Work", "Personal", "Ideas"];

export default function SidebarNotes() {
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>
        <Link href="/notes/filter/all" className={styles.menuLink}>
          All notes
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag} className={styles.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={styles.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
