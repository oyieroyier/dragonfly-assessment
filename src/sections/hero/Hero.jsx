import { HeroTabs } from "./components/HeroTabs";
import { SearchForm } from "./components/SearchForm";

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-[600px] sm:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1463694372132-6c267f6ba561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2F5YWt8ZW58MHx8MHx8fDA%3D"
          alt="People kayaking"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative px-4 pb-12 pt-8 sm:pt-20">
        <h1 className="mb-8 text-center text-3xl font-bold text-white drop-shadow-lg sm:mb-12 sm:text-4xl md:text-5xl">
          Package deals to top destination
        </h1>
        <div className="mx-auto max-w-6xl">
          <HeroTabs />
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
