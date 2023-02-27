export default function ShortOrange() {
  return (
    <div className="absolute bottom-0 left-[20%] h-[40px] w-[50px] border-x-[1px] border-t-[1px] border-[rgba(0,0,255,0.25)] bg-amber-200">
      <div className="absolute right-0.5 top-1 flex gap-x-0.25">
        {Array(4).fill(
          <>
            <div className="h-1 w-0.5 bg-black"></div>
            <div className="h-1 w-0.5 bg-black"></div>
          </>
        )}
      </div>
    </div>
  );
}
