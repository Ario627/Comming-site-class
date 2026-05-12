import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sendToTelegram } from "@/lib/telegram";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const { allowed, remaining } = rateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "Terlalu banyak saran. Coba lagi dalam beberapa menit." },
      { status: 429, headers: { "X-RateLimit-Remaining": "0" } },
    );
  }

  let body: { message?: string; category?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Format body tidak valid." },
      { status: 400 },
    );
  }

  const { message, category } = body;

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Pesan wajib diisi." }, { status: 400 });
  }

  const trimmed = message.trim();
  if (trimmed.length < 10) {
    return NextResponse.json(
      { error: "Pesan terlalu pendek. Minimal 10 karakter." },
      { status: 400 },
    );
  }

  if (trimmed.length > 500) {
    return NextResponse.json(
      { error: "Pesan terlalu panjang. Maksimal 500 karakter." },
      { status: 400 },
    );
  }

  const validCategories = ["fitur", "bug", "uiux", "umum"];
  const safeCategory = category && validCategories.includes(category) ? category : "umum";

  const sent = await sendToTelegram({
    message: trimmed,
    category: safeCategory,
  });

  if (!sent) {
    return NextResponse.json(
      { error: "Gagal mengirim saran. Silakan coba lagi nanti." },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { success: true },
    { headers: { "X-RateLimit-Remaining": String(remaining) } },
  );
}