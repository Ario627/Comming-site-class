interface SuggestionPayload {
  message: string;
  category: string;
}

export async function sendToTelegram(
  payload: SuggestionPayload,
): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "TELEGRAM_BOT_TOKEN atau TELEGRAM_CHAT_ID belum diset di .env.local",
    );
    return false;
  }

  const categoryMap: Record<string, string> = {
    fitur: "Fitur",
    bug: "Bug",
    uiux: "UI/UX",
    umum: "Umum",
  };

  const categoryLabel = categoryMap[payload.category] || payload.category;

  const now = new Date();
  const timestamp = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Asia/Jakarta",
  }).format(now);

  const text = [
    "<b>Saran Baru Masuk!</b>",
    "",
    `<b>Pesan:</b>`,
    payload.message,
    "",
    `<b>Kategori:</b> ${categoryLabel}`,
    `<b>Waktu:</b> ${timestamp} WIB`,
    "",
    "—",
    "<i>Dikirim secara anonim dari halaman Coming Soon</i>",
  ].join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      },
    );

    return res.ok;
  } catch {
    return false;
  }
}
