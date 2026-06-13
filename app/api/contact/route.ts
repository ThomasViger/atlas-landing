// app/api/contact/route.ts
// Reçoit le formulaire de contact (nom, ville, email) et envoie un e-mail
// via Resend vers la boîte du fondateur. Aucune donnée n'est stockée.
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Payload = {
  nom?: unknown
  ville?: unknown
  email?: unknown
  // Honeypot anti-spam : champ caché qui doit rester vide.
  website?: unknown
}

function asString(v: unknown): string {
  return typeof v === 'string' ? v.trim() : ''
}

export async function POST(request: Request) {
  let body: Payload
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'Requête invalide.' }, { status: 400 })
  }

  // Honeypot rempli → on fait semblant d'accepter, sans rien envoyer.
  if (asString(body.website)) {
    return Response.json({ ok: true })
  }

  const nom = asString(body.nom)
  const ville = asString(body.ville)
  const email = asString(body.email)

  if (!nom || !ville || !email) {
    return Response.json(
      { ok: false, error: 'Merci de renseigner votre nom, votre ville et votre e-mail.' },
      { status: 422 },
    )
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: 'L’adresse e-mail ne semble pas valide.' },
      { status: 422 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO || 'viger.thomas.dev@gmail.com'
  // Expéditeur sur le domaine vérifié dans Resend.
  const from = process.env.CONTACT_FROM || 'Atlas <contact@thomasviger.com>'

  if (!apiKey) {
    console.error('RESEND_API_KEY manquante : impossible d’envoyer le mail de contact.')
    return Response.json(
      { ok: false, error: 'Service indisponible pour le moment.' },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Liste d’attente Atlas — ${nom} (${ville})`,
      text: `Nouvelle demande depuis la landing Atlas :\n\nNom : ${nom}\nVille : ${ville}\nE-mail : ${email}\n`,
    })

    if (error) {
      console.error('Erreur Resend :', error)
      return Response.json(
        { ok: false, error: 'L’envoi a échoué. Réessayez dans un instant.' },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('Exception lors de l’envoi Resend :', err)
    return Response.json(
      { ok: false, error: 'L’envoi a échoué. Réessayez dans un instant.' },
      { status: 502 },
    )
  }

  return Response.json({ ok: true })
}
