export default function TallSkyBlue() {
  return (
    <div className="absolute bottom-0 left-[15%] h-[220px] w-[110px] border-x-[1px] border-t-[1px] border-[rgba(0,0,255,0.15)] bg-sky-200">
      <div className="absolute right-0.5 top-1 flex gap-x-0.5">
        {Array(4).fill(
          <>
            <div className="h-[7px] w-1 bg-sky-100"></div>
            <div className="h-[7px] w-1 bg-sky-100"></div>
          </>
        )}
      </div>
    </div>
  );
}
