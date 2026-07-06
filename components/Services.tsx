const services = [
  {
    title: "Transport dédié",
    text: "Un véhicule réservé à votre mission, sans rupture de charge.",
  },
  {
    title: "Transport régional",
    text: "Prise en charge rapide autour de Villefranche-sur-Saône et en région.",
  },
  {
    title: "Transport national",
    text: "Acheminement de vos marchandises partout en France.",
  },
  {
    title: "Moins de 3,5 tonnes",
    text: "Solutions adaptées aux professionnels pour tout type de marchandise.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-semibold text-orange-500">Nos services</p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-neutral-900 md:text-5xl">
            Des solutions de transport simples, rapides et fiables.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-[#fafaf8] p-8 transition hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="mb-8 h-3 w-14 rounded-full bg-orange-500"></div>

              <h3 className="text-2xl font-bold text-neutral-900">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}