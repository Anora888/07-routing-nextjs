"use client";

import styles from "./NoteForm.module.css";

interface NoteFormProps {
  onClose: () => void;
}

export default function NoteForm({ onClose }: NoteFormProps) {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Create note</h2>

      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />

      <textarea
        className={styles.textarea}
        name="content"
        placeholder="Content"
      />

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          Save
        </button>

        <button
          type="button"
          className={styles.cancel}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}