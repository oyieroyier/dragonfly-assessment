/* eslint-disable react/prop-types */
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react";

const icons = {
  mapPin: MapPin,
  calendar: Calendar,
  users: Users,
  chevronDown: ChevronDown,
};

export function FormInput({
  label,
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
}) {
  const Icon = icons[icon];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {icon && (
          <Icon
            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={18}
          />
        )}
        {type === "select" ? (
          <select
            value={value}
            onChange={onChange}
            className="w-full appearance-none rounded-md border border-gray-300 py-2 pl-4 pr-10 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {placeholder.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className={`w-full ${icon ? "pl-10" : "pl-4"} rounded-md border border-gray-300 py-2 pr-4 text-sm focus:border-blue-500 focus:ring-blue-500`}
            placeholder={placeholder}
          />
        )}
        {type === "select" && (
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={18}
          />
        )}
      </div>
    </div>
  );
}
