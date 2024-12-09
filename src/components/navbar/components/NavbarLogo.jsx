export function NavbarLogo() {
  return (
    <div className="flex items-center gap-2 md:gap-8">
      <img
        src="https://www.logo.wine/a/logo/RwandAir/RwandAir-Logo.wine.svg"
        alt="RwandAir Holidays"
        className="h-16 md:h-32"
      />
      <span className="hidden font-semibold text-blue-600 md:inline">
        HOLIDAYS
      </span>
    </div>
  );
}
