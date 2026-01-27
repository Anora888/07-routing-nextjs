"use client";
import { useEffect } from "react";

export default function NotesError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: 40 }}>
      <h2>Something went wrong while loading the notes</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}