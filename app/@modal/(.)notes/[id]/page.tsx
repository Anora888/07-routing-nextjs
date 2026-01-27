"use client";
import { useRouter } from "next/navigation";
import NotePreviewClient from "@/components/NotePreview/NotePreview";

interface Props {
  params: { id: string };
}

export default function NotePreviewModal({ params }: Props) {
  const router = useRouter();

  return (
    <NotePreviewClient noteId={params.id} onClose={() => router.back()} />
  );
}