import { Note } from "@/types/note";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;


export async function fetchNotes(): Promise<Note[]> {
  const res = await fetch(`${BASE_URL}/notes`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
}


export async function fetchNoteById(id: string): Promise<Note> {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch note");
  }

  return res.json();
}


export async function createNote(data: {
  title: string;
  content: string;
}) {
  const res = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  return res.json();
}