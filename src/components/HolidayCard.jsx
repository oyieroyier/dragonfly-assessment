/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";

export function HolidayCard({ image, title, price }) {
  return (
    <a
      href="#"
      className="group relative cursor-pointer overflow-hidden rounded-3xl"
    >
      <div className="relative h-[400px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30" />

        {/* Refined white overlay with more accurate curve */}
        <div className="absolute bottom-0 left-0 h-[140px] w-full">
          <svg
            className="absolute bottom-0 right-0 h-full w-full"
            viewBox="0 0 400 140"
            preserveAspectRatio="none"
          >
            <path d="M400,140V0C250,0,200,140,0,140Z" fill="white" />
          </svg>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 flex w-full items-end p-8">
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
            <ArrowUpRight className="h-6 w-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">From</div>
            <div className="text-2xl font-semibold text-blue-600">${price}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
