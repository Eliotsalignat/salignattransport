const advantages = [
  [
    "Interlocuteur unique",
    "Un seul contact pour suivre votre transport de la prise en charge jusqu'à la livraison.",
  ],
  [
    "Réponse sous 24 h",
    "Chaque demande est étudiée rapidement afin de vous apporter une solution adaptée.",
  ],
  [
    "Transport dédié",
    "Votre marchandise voyage dans un véhicule réservé à votre mission, sans rupture de charge.",
  ],
  [
    "Transport régional & national",
    "Au départ de Villefranche-sur-Saône, nous intervenons en région Auvergne-Rhône-Alpes et partout en France.",
  ],
];
export default function WhyUs() {
  return (
    <section className="bg-[#fafaf8] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-orange-500">Pourquoi nous choisir</p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-neutral-900 md:text-5xl">
              Chaque transport mérite le même niveau d’exigence.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
  Chez Salignat Transport, chaque mission est préparée avec rigueur
  et suivie avec attention.
  <br />
  <br />
  Notre priorité est simple : vous proposer une solution fiable,
  réactive et adaptée à vos besoins, que votre transport soit
  régional, national ou urgent.
</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-neutral-900">{title}</h3>

                <p className="mt-4 leading-7 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}