import { HolidayCard } from "../../components/HolidayCard";

const packages = [
  {
    title: "Maldive Holidays",
    price: "1,199",
    image:
      "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Rwanda Holidays",
    price: "1,199",
    image:
      "https://images.unsplash.com/photo-1668875438994-4388304392ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cndhbmRhfGVufDB8fDB8fHww",
  },
  {
    title: "London Holidays",
    price: "1,199",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww",
  },
];

export default function HolidayPackages() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Always offering amazing holiday packages
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <HolidayCard
            key={index}
            title={pkg.title}
            price={pkg.price}
            image={pkg.image}
          />
        ))}
      </div>
    </div>
  );
}
