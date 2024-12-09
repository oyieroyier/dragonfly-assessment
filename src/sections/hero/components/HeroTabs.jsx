import { Plane, Hotel, Car } from "lucide-react";
import { TabButton } from "../../../components/buttons/TabButton";

export function HeroTabs() {
  return (
    <div className="mx-auto max-w-4xl rounded-t-lg bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row">
        <TabButton active>
          <div className="flex items-center gap-1">
            <Plane className="h-4 w-4" />
            <Hotel className="h-4 w-4" />
          </div>
          <span>Flights + Hotel</span>
        </TabButton>
        <TabButton>
          <div className="flex items-center gap-1">
            <Plane className="h-4 w-4" />
            <Car className="h-4 w-4" />
          </div>
          <span>Flight + Cars</span>
        </TabButton>
        <TabButton>
          <Hotel className="h-4 w-4" />
          <span>Hotels</span>
        </TabButton>
      </div>
    </div>
  );
}
