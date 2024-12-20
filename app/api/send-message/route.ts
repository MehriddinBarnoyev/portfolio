import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, message } = await request.json();
  const token = "7495482176:AAFiVM9_V-FXGN4AGFyAcuQ-hLI5Ompeu6k";
  const chatId = "7481635265";

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram configuration is missing" },
      { status: 500 }
    );
  }

  const text = `Yangi xabar:\nIsm: ${name}\nXabar: ${message}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    text
  )}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
