import PinkBuilding from "~/components/pink.building";
import ShortOrange from "~/components/short.orange";
import TallSkyBlue from "~/components/tall.sky.blue";
import WaterTower from "~/components/water.tower";

export default function Index() {
  return (
    <main className="h-full bg-[#d5d6cf] p-4 text-xl md:p-8">
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
