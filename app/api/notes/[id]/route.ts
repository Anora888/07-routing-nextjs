import { NextResponse } from "next/server";

const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN!;

interface Params {
  params: {
    id: string;
  };
}

export async function GET(_: Request, { params }: Params) {
  const res = await fetch(`${BASE_URL}/notes/${params.id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Note not found" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
export async function DELETE(_: Request, { params }: Params) {
  const res = await fetch(`${BASE_URL}/notes/${params.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to delete note" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
