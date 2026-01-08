import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const emailContent = `
Nova Solicitação de Contato - CodeliumCompany

📋 INFORMAÇÕES DO CLIENTE:
━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome: ${data.nome}
📧 Email: ${data.email}
📱 Telefone: ${data.telefone}
🔍 Como nos encontrou: ${data.comoChegou}
🎯 Nicho: ${data.nicho}

━━━━━━━━━━━━━━━━━━━━━━━━
💬 MENSAGEM:
${data.mensagem}
━━━━━━━━━━━━━━━━━━━━━━━━
    `

    // Using Web3Forms service to send emails
    const emailResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "",
        subject: `🚀 Novo Contato: ${data.nome} - ${data.nicho}`,
        from_name: "CodeliumCompany Website",
        email: data.email,
        name: data.nome,
        message: emailContent,
      }),
    })

    const result = await emailResponse.json()

    if (!emailResponse.ok || !result.success) {
      throw new Error(result.message || "Erro ao enviar email")
    }

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" })
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}
