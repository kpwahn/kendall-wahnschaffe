export default function PinkBuilding() {
  return (
    <div className="absolute bottom-0 left-1/4 h-[175px] w-[90px] border-x-[1px] border-t-[1px] border-[rgba(0,0,255,0.08)] bg-red-100">
      <div className="absolute right-0.5 top-1 grid grid-cols-4 gap-x-0.5 gap-y-0.25">
        {Array(16).fill(
          <div className="flex gap-x-0.25">
            <div className="h-1 w-0.5 bg-black"></div>
            <div className="h-1 w-0.5 bg-black"></div>
          </div>
        )}
      </div>
    </div>
  );
}
