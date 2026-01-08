import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const emailContent = `
      Nome: ${data.nome}
      Email: ${data.email}
      Telefone: ${data.telefone}
      Como chegou até nós: ${data.comoChegou}
      Nicho específico: ${data.nicho}
      Mensagem: ${data.mensagem}
    `

    // Using a simple email service API
    const emailResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "",
        subject: `Novo contato de ${data.nome}`,
        from_name: "CodeliumCompany Website",
        to_email: "codeliumcompany@gmail.com",
        message: emailContent,
        email: data.email,
        name: data.nome,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error("Erro ao enviar email")
    }

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" })
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}
