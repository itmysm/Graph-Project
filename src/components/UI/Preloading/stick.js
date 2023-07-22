export default function StickLoading() {
  return (
    <>
      <div className="w-full h-[100%] flex flex-col items-center justify-center absolute select-none z-[99]">
        <div class="inline-block">
          <div class="stick"></div>
          <div class="stick"></div>
          <div class="stick"></div>
          <div class="stick"></div>
          <div class="stick"></div>
          <div class="stick"></div>
        </div>

        <h1 class="text-lg mt-6 tracking-wider text-loading">LOADING..</h1>
      </div>
    </>
  )
}