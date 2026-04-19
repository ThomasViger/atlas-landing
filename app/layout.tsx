import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas — On porte votre cabinet, vous plaidez",
  description:
    "Le SaaS de gestion pour avocats solo. Dossiers, délais, facturation, documents — sans usine à gaz. Lancement septembre 2026.",
  openGraph: {
    title: "Atlas — On porte votre cabinet, vous plaidez",
    description:
      "Le SaaS de gestion pour avocats solo. Dossiers, délais, facturation, documents — sans usine à gaz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
