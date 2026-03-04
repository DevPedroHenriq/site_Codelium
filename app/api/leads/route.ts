import { NextResponse } from "next/server"

// Web App URL do Google Apps Script (Sheets)
const GOOGLE_SHEETS_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbwtKxvwSpVRc56pQ-lvESBJe8ptKf1y-G0nJg4QrBPhtNTtjGw3mtZx9nidslgfpswc/exec"

async function postJson(body: unknown) {
  return fetch(GOOGLE_SHEETS_WEBAPP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  })
}

async function postFormUrlEncoded(body: Record<string, unknown>) {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(body)) {
    params.append(k, String(v ?? ""))
  }

  return fetch(GOOGLE_SHEETS_WEBAPP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: params.toString(),
    cache: "no-store",
  })
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>

    // 1) Tenta JSON (caso seu Apps Script use JSON.parse(e.postData.contents))
    let res = await postJson(body)
    let text = await res.text()

    // tenta interpretar retorno { ok: true }
    let parsed: any = null
    try {
      parsed = JSON.parse(text)
    } catch {
      // ignore
    }

    // Se falhou, tenta URL Encoded (caso seu Apps Script use e.parameter)
    if (!res.ok || (parsed && parsed.ok === false)) {
      res = await postFormUrlEncoded(body)
      text = await res.text()
      parsed = null
      try {
        parsed = JSON.parse(text)
      } catch {
        // ignore
      }
    }

    const ok = res.ok && (!parsed || parsed.ok !== false)

    if (!ok) {
      return NextResponse.json(
        {
          ok: false,
          status: res.status,
          responseText: text,
          responseJson: parsed,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    )
  }
}
