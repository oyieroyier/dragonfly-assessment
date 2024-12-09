/* eslint-disable react/prop-types */
import { User } from "lucide-react";

export function ContactButton({ mobile = false }) {
  const buttonClass = mobile
    ? "flex w-full items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100"
    : "flex items-center gap-2 text-gray-600 hover:text-blue-600";

  return (
    <button className={buttonClass}>
      <User className="h-5 w-5" />
      <span>Contact Us</span>
    </button>
  );
}
