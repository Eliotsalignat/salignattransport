export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fafaf8]"
    >
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-100 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-50 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
          Transport régional & national • Moins de 3,5 tonnes
        </span>

        <h1 className="mt-8 text-6xl font-black tracking-tight text-neutral-900 md:text-7xl">
          SALIGNAT
        </h1>

        <h2 className="mt-2 text-2xl font-light tracking-[12px] text-orange-500">
          TRANSPORT
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-neutral-600">
          <strong className="text-neutral-900">
            On transporte votre confiance.
          </strong>

          <br />

          Parce qu'un transport réussi, c'est avant tout une promesse tenue.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
          >
            Demander un devis
          </a>

          <a
            href="tel:0652827148"
            className="rounded-full border-2 border-neutral-900 px-10 py-5 text-lg font-semibold transition hover:bg-neutral-900 hover:text-white"
          >
            Appeler
          </a>

        </div>

      </div>
    </section>
  );
}