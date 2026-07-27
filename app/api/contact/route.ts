import { NextResponse } from "next/server";
import { CONTACT_INFO } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: subject || `Contato via Portfólio: ${name}`,
        message,
        to_email: CONTACT_INFO.email,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
    } else {
      return NextResponse.json(
        { success: false, error: data.message || "Falha ao enviar mensagem." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno no servidor ao processar o formulário.",
      },
      { status: 500 },
    );
  }
}
