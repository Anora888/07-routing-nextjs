"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";
import css from "./NotePreview.module.css";

interface Props {
  noteId: string;
  onClose: () => void;
}

export default function NotePreviewClient({ noteId, onClose }: Props) {
  const { data: note, isLoading, error } = useQuery<Note>({
    queryKey: ["note-preview", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) return <p>Loading preview...</p>;
  if (error || !note) return <p>Cannot load note preview.</p>;

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <p>Created: {new Date(note.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}