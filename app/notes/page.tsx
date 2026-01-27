import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export default async function NotesPage() {
  const data = await fetchNotes();

  return <NoteList notes={data.notes} />;
}
