/* eslint-disable react/prop-types */
export function NavLinks({ mobile = false }) {
  const linkClass = mobile
    ? "block px-4 py-2 text-gray-600 hover:bg-gray-100"
    : "hover:text-blue-600";

  return (
    <>
      <a href="#" className={linkClass}>
        Destinations
      </a>
      <a href="#" className={linkClass}>
        Explore Rwanda
      </a>
      <a href="#" className={linkClass}>
        Deals
      </a>
    </>
  );
}
