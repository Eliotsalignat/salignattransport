export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a href="#accueil" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Salignat Transport"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-xl font-black tracking-wider">
              SALIGNAT
            </h1>

            <p className="text-xs tracking-[6px] text-orange-500">
              TRANSPORT
            </p>
          </div>
        </a>

        <nav className="hidden gap-10 text-sm font-medium lg:flex">

          <a href="#accueil" className="transition hover:text-orange-500">
            Accueil
          </a>

          <a href="#services" className="transition hover:text-orange-500">
            Services
          </a>

          <a href="#contact" className="transition hover:text-orange-500">
            Contact
          </a>

        </nav>

        <a
          href="tel:0652827148"
          className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
        >
          Appeler
        </a>

      </div>
    </header>
  );
}