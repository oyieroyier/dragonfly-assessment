/* eslint-disable react/prop-types */
export function TabButton({ children, active = false }) {
  const baseClass =
    "flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base";
  const activeClass = "border-b-2 border-blue-600 text-blue-600";
  const inactiveClass =
    "border-b border-gray-200 text-gray-600 hover:text-blue-600";

  return (
    <button className={`${baseClass} ${active ? activeClass : inactiveClass}`}>
      {children}
    </button>
  );
}
