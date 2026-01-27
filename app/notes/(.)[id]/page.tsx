import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "@/components/NoteDetails/NoteDetails.client";

interface Props {
  params: { id: string };
}

export default async function NotePage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return <NoteDetailsClient noteId={note.id} />;
}
