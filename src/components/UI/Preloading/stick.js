export default function StickLoading() {
  return (
    <>
      <div className="w-full h-[100%] flex flex-col items-center justify-center absolute select-none z-[99]">
        <div className="inline-block">
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
        </div>

        <h1 className="text-lg mt-6 tracking-wider text-loading">LOADING..</h1>
      </div>
    </>
  )
}