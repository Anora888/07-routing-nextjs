import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import { Note } from "@/types/note";

interface Props {
  params: { slug?: string[] };
}

export default async function FilteredNotesPage({ params }: Props) {
  const tag = params?.slug?.[0] || "all";

  let notes: Note[] = [];
  try {
    const data = await fetchNotes(1, "", tag);
    notes = data.notes;
  } catch (err) {
    console.error("Error fetching notes:", err);
  }

  if (notes.length === 0) {
    return <p>No notes found or an error occurred.</p>;
  }

  return <NoteList notes={notes} />;
}