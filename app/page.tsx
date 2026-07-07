"use client";

import { FormEvent, useState } from "react";

const phone = "0652827148";
const whatsapp = "33652827148";
const email = "contact@salignattransport.fr";

const services = [
  ["truck", "Transport dédié", "Un véhicule réservé à votre mission, sans rupture de charge."],
  ["pin", "Transport régional", "Prise en charge rapide sur la région lyonnaise, Rhône-Alpes et Auvergne."],
  ["shield", "Transport national", "Acheminement de vos marchandises partout en France."],
  ["clock", "Transport urgent", "Une solution réactive pour vos livraisons sensibles ou délais courts."],
  ["box", "Moins de 3,5 tonnes", "Transport de marchandises adapté aux besoins des professionnels."],
  ["check", "Tout type de transport", "Colis, matériel et marchandises diverses : nous étudions chaque demande."],
];

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "truck") return <svg {...props}><path d="M3 7h11v10H3z" /><path d="M14 11h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>;
  if (name === "pin") return <svg {...props}><path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>;
  if (name === "shield") return <svg {...props}><path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6z" /></svg>;
  if (name === "clock") return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></svg>;
  if (name === "box") return <svg {...props}><path d="M21 8l-9-5-9 5 9 5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>;
  if (name === "phone") return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" /></svg>;
  if (name === "mail") return <svg {...props}><path d="M4 4h16v16H4z" /><path d="m22 6-10 7L2 6" /></svg>;
  if (name === "map") return <svg {...props}><path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>;
  if (name === "user") return <svg {...props}><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>;
  if (name === "whatsapp") return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.34 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.48 0 9.93-4.45 9.93-9.93S17.52 2 12.04 2Zm5.78 14.2c-.24.68-1.38 1.3-1.93 1.35-.5.05-1.13.07-1.82-.11-.42-.11-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.02-2.41c.27-.29.59-.36.78-.36h.56c.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.31.38-.44.51-.14.14-.29.29-.12.58.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.28 2.32 1.43.29.14.46.12.63-.07.19-.22.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" /></svg>;
  return <svg {...props}><path d="M20 6L9 17l-5-5" /></svg>;
}

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      departure: formData.get("departure"),
      arrival: formData.get("arrival"),
      date: formData.get("date"),
      transport: formData.get("transport"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-neutral-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
          <a href="#accueil" className="justify-self-start">
            <img src="/logo.svg" alt="Salignat Transport" className="h-14 w-auto" />
          </a>

          <nav className="hidden justify-self-center gap-14 text-sm font-bold md:flex">
            <a href="#accueil" className="border-b-2 border-orange-500 pb-2 text-orange-500">Accueil</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#devis" className="hover:text-orange-500">Devis</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>

          <div className="flex justify-self-end gap-3">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-orange-600">
              <Icon name="phone" className="h-4 w-4" /> Appeler
            </a>
            <a href={`https://wa.me/${whatsapp}`} className="hidden items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 font-bold transition hover:scale-105 hover:text-orange-500 md:inline-flex">
              <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section id="accueil" className="relative flex min-h-[86vh] items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fbfaf8] to-orange-50" />
        <img src="/logo.svg" alt="" className="pointer-events-none absolute left-[-10rem] top-44 h-[28rem] w-auto opacity-[0.03] blur-xl" />
        <img src="/logo.svg" alt="" className="pointer-events-none absolute right-[-10rem] top-44 h-[28rem] w-auto opacity-[0.03] blur-xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <img src="/logo.svg" alt="Salignat Transport" className="mx-auto mb-8 h-64 w-auto drop-shadow-lg" />
          <h1 className="text-3xl font-black tracking-tight md:text-4xl">On transporte votre confiance</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-neutral-600">
            Parce qu&apos;un transport réussi, c&apos;est une promesse tenue.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold text-neutral-600">
            <span>Interlocuteur unique</span><span className="text-orange-500">•</span>
            <span>Réponse sous 24 h</span><span className="text-orange-500">•</span>
            <span>Régional, national & urgent</span>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <a href="#devis" className="rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white transition hover:scale-105 hover:bg-orange-600">
              Demander un devis →
            </a>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-900 px-10 py-4 text-lg font-bold transition hover:scale-105 hover:bg-neutral-950 hover:text-white">
              <Icon name="phone" className="h-5 w-5" /> Appeler
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 px-6 py-8 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="flex items-center gap-5">
            <Icon name="clock" className="h-10 w-10" />
            <div>
              <h3 className="text-xl font-black">Transport régional, national et urgent</h3>
              <p>avec réactivité, fiabilité et professionnalisme.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Icon name="user" className="h-10 w-10" />
            <div>
              <h3 className="text-xl font-black">Un interlocuteur unique</h3>
              <p>pour suivre votre transport de la prise en charge à la livraison.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase text-orange-500">Nos services</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
            Des solutions adaptées à chaque besoin.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {services.map(([icon, title, text]) => (
              <div key={title} className="group rounded-2xl border border-neutral-200 bg-[#fbfaf8] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-105 hover:border-orange-300 hover:shadow-2xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon name={icon} />
                </div>
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="bg-[#fafaf8] px-6 py-24">
        <form onSubmit={handleSubmit} className="mx-auto max-w-5xl rounded-[2rem] bg-neutral-950 p-8 text-white shadow-2xl md:p-12">
          <p className="font-bold uppercase text-orange-500">Demande de devis</p>
          <h2 className="mt-4 text-4xl font-black">Un besoin de transport ?</h2>
          <p className="mt-4 text-neutral-300">Envoyez votre demande, réponse sous 24h maximum.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <input name="name" required className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" placeholder="Nom et prénom" />
            <input name="company" className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" placeholder="Société (facultatif)" />
            <input name="phone" required className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" placeholder="Téléphone" />
            <input name="email" type="email" required className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" placeholder="Email" />
            <input name="departure" required className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" placeholder="Lieu de départ" />
            <input name="arrival" required className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" placeholder="Lieu d’arrivée" />
            <input name="date" type="date" className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500" />
            <select name="transport" required className="rounded-2xl border border-white/20 bg-neutral-900 px-5 py-4 outline-none focus:border-orange-500">
              <option value="">Type de transport</option>
              <option>Transport urgent</option>
              <option>Transport régional</option>
              <option>Transport national</option>
              <option>Transport dédié</option>
              <option>Autre demande</option>
            </select>
            <textarea name="message" required className="min-h-32 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 outline-none focus:border-orange-500 md:col-span-2" placeholder="Marchandise, dimensions, poids, urgence, consignes particulières..." />
          </div>

          <button disabled={status === "loading"} type="submit" className="mt-6 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-orange-600 disabled:opacity-60">
            {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>

          {status === "success" && <p className="mt-5 rounded-2xl bg-green-500/15 p-4 font-bold text-green-300">Votre demande a bien été envoyée. Nous vous répondrons sous 24h maximum.</p>}
          {status === "error" && <p className="mt-5 rounded-2xl bg-red-500/15 p-4 font-bold text-red-300">Une erreur est survenue. Vous pouvez nous contacter directement par téléphone ou par e-mail.</p>}
        </form>
      </section>

      <footer id="contact" className="bg-neutral-950 px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4 md:items-center">
          <img src="/logo.svg" alt="Salignat Transport" className="h-20 w-auto" />
          <a href={`tel:${phone}`} className="flex items-center gap-3 hover:text-orange-500"><Icon name="phone" className="h-5 w-5" /> 06 52 82 71 48</a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-orange-500"><Icon name="mail" className="h-5 w-5" /> {email}</a>
          <p className="flex items-center gap-3"><Icon name="map" className="h-5 w-5" /> Villefranche-sur-Saône</p>
        </div>

        <div className="mx-auto mt-8 h-1 max-w-7xl rounded-full bg-orange-500" />

        <div className="mx-auto mt-6 max-w-7xl text-center text-sm text-neutral-500">
          <p>SIRET : 106 087 067 00018 • TVA intracommunautaire : FR42 106087067</p>
          <p className="mt-2">© 2026 Salignat Transport — Tous droits réservés.</p>
          <p className="mt-2">Mentions légales : SALIGNAT TRANSPORT, siège social à Villefranche-sur-Saône. Contact : {email}</p>
        </div>
      </footer>

      <a href={`https://wa.me/${whatsapp}`} className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110" aria-label="Contacter sur WhatsApp">
        <Icon name="whatsapp" className="h-8 w-8" />
      </a>
    </main>
  );
}