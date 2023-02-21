export default function WaterTower() {
  return (
    <div
      className="absolute bottom-0 left-[30%] h-[260px] w-[110px] border-x-[1px] border-t-[1px] border-[rgba(0,0,255,0.07)] bg-pink-100"
      style={{
        clipPath: "polygon(0 0, 92% 0, 100% 3%, 100% 100%, 0 100%, 0% 50%)",
      }}
    >
      <div className="absolute right-2 top-1 flex gap-x-0.25">
        {Array(8).fill(
          <>
            <div className="h-0.75 w-0.25 bg-black"></div>
            <div className="h-0.75 w-0.25 bg-black"></div>
          </>
        )}
      </div>
      <div className="absolute right-2 top-2 flex gap-x-0.25">
        {Array(4).fill(
          <>
            <div className="h-0.75 w-0.25 bg-black"></div>
            <div className="h-0.75 w-0.25 bg-black"></div>
          </>
        )}
      </div>
    </div>
  );
}
