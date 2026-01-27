"use client";

import { Note } from "@/types/note";
import NoteDetailsClient from "@/components/NoteDetails/NoteDetails.client";
import css from "./NoteList.module.css";

interface Props {
  notes: Note[];
}

export default function NoteList({ notes }: Props) {
  if (notes.length === 0) return <p>No notes found.</p>;

  return (
    <div className={css.container}>
      {notes.map((note) => (
        <NoteDetailsClient key={note.id} noteId={note.id} />
      ))}
    </div>
  );
}