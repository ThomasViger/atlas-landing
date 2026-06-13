'use client'
// components/ContactForm.tsx
// Formulaire « être prévenu » : nom, ville, e-mail. Poste vers /api/contact
// qui envoie un mail via Resend. Aucun stockage.
import { useState } from 'react'
import styles from './ContactForm.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      nom: String(data.get('nom') || ''),
      ville: String(data.get('ville') || ''),
      email: String(data.get('email') || ''),
      website: String(data.get('website') || ''), // honeypot
    }

    setStatus('sending')
    setMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))

      if (res.ok && json.ok) {
        setStatus('success')
        setMessage('C’est noté. Vous serez prévenu à l’ouverture.')
        form.reset()
      } else {
        setStatus('error')
        setMessage(json.error || 'L’envoi a échoué. Réessayez dans un instant.')
      }
    } catch {
      setStatus('error')
      setMessage('L’envoi a échoué. Vérifiez votre connexion et réessayez.')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="cf-nom">Nom et prénom</label>
          <input id="cf-nom" name="nom" type="text" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-ville">Ville</label>
          <input id="cf-ville" name="ville" type="text" autoComplete="address-level2" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-email">E-mail</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      {/* Honeypot : caché aux humains, piège à bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="cf-website">Ne pas remplir</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-bronze btn-xl" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Être prévenu à l’ouverture'}
      </button>

      <p
        className={`${styles.feedback} ${status === 'error' ? styles.feedbackError : ''} ${
          status === 'success' ? styles.feedbackSuccess : ''
        }`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  )
}
