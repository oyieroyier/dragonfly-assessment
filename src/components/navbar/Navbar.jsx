import { Menu } from "lucide-react";
import { useState } from "react";
import { NavbarLogo } from "./components/NavbarLogo";
import { NavLinks } from "./components/NavLinks";
import { LanguageSelector } from "../LanguageSelector";
import { ContactButton } from "../buttons/ContactButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 py-2 shadow-sm md:px-6 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <NavbarLogo />

        {/* Mobile menu button */}
        <button
          className="text-gray-600 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 text-gray-600 md:flex">
          <NavLinks />
        </div>

        {/* Right Section */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSelector />
          <ContactButton />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-2 space-y-2 md:hidden">
          <NavLinks mobile />
          <LanguageSelector mobile />
          <ContactButton mobile />
        </div>
      )}
    </nav>
  );
}
