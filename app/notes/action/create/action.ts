'use server';

import { revalidatePath } from 'next/cache';

export async function createNote(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  if (!title || !content) {
    throw new Error('Missing fields');
  }

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  
  revalidatePath('/notes');
}