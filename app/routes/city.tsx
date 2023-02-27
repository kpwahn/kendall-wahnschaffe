import PinkBuilding from "~/components/pink.building";
import PinkBuilding from "~/components/buildings/pink.building";
import ShortOrange from "~/components/buildings/short.orange";
import TallSkyBlue from "~/components/buildings/tall.sky.blue";
import WaterTower from "~/components/buildings/water.tower";

export default function Index() {
  return (
    <main className="h-full bg-[#d5d6cf] p-4 md:p-8">
      <div className="-mx-4 h-2/3">
        <div className="relative h-full w-full border-b-2 border-[#403f3c]">
          <WaterTower />
          <TallSkyBlue />
          <PinkBuilding />
          <ShortOrange />
        </div>
      </div>
    </main>
  );
}
