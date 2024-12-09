import { useState } from "react";
import { FormInput } from "../../../components/inputs/FormInputs";

export function SearchForm() {
  const [flyingFrom, setFlyingFrom] = useState("Kigali, Rwanda");
  const [flyingTo, setFlyingTo] = useState("");
  const [departing, setDeparting] = useState("28 Feb 2024");
  const [returning, setReturning] = useState("28 Feb 2024");
  const [travelers, setTravelers] = useState("1 Room, 2 Persons");
  const [cabinClass, setCabinClass] = useState("Economy");

  return (
    <div className="rounded-b-lg bg-white p-4 shadow-md sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FormInput
          label="Flying from"
          value={flyingFrom}
          onChange={(e) => setFlyingFrom(e.target.value)}
          placeholder="Enter city or airport"
          icon="mapPin"
        />
        <FormInput
          label="Flying to"
          value={flyingTo}
          onChange={(e) => setFlyingTo(e.target.value)}
          placeholder="Enter city or airport"
          icon="mapPin"
        />
        <FormInput
          label="Departing"
          value={departing}
          onChange={(e) => setDeparting(e.target.value)}
          placeholder="Select date"
          icon="calendar"
        />
        <FormInput
          label="Returning"
          value={returning}
          onChange={(e) => setReturning(e.target.value)}
          placeholder="Select date"
          icon="calendar"
        />
        <FormInput
          label="Travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          placeholder="Select travelers"
          icon="users"
        />
        <FormInput
          label="Cabin class"
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value)}
          placeholder={["Economy", "Business", "First Class"]}
          type="select"
        />
      </div>
      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <button className="text-sm text-blue-600 hover:underline">
          + Add promo code
        </button>
        <button className="w-full rounded-md bg-blue-600 px-6 py-2 text-sm text-white transition-colors hover:bg-blue-700 sm:w-auto">
          Search packages
        </button>
      </div>
    </div>
  );
}
