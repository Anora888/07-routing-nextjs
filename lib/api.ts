import type { Note } from "@/types/note";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}


export const fetchNotes = async (
  page = 1,
  search = "",
  tag?: string
): Promise<FetchNotesResponse> => {
  const params = new URLSearchParams({ page: String(page) });

  if (search) params.append("search", search);
  if (tag && tag !== "all") params.append("tag", tag);

  const res = await fetch(
    `${BASE_URL}/api/notes?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await fetch(`${BASE_URL}/api/notes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch note");
  }

  return res.json();
};