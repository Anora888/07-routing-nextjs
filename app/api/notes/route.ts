import { NextResponse } from "next/server";

const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN!;


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page") ?? "1";
  const search = searchParams.get("search") ?? "";
  const tag = searchParams.get("tag");

  const params = new URLSearchParams({ page });

  if (search) params.append("search", search);
  if (tag && tag !== "all") params.append("tag", tag);

  const res = await fetch(`${BASE_URL}/notes?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch notes" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}


export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}