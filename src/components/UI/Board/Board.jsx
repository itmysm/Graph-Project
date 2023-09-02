export default function Board(props) {
  return (
    <div
      className={`w-fit min-w-[240px] rounded-[30px] p-5 bg-secondary-active/90 ${props.styles}`}
    >
      <p className="mb-1">Total Messages</p>
      <p className="mb-3 text-xs">Oct 16 / 21 - Nov 14 / 21</p>
      <div>
        <p className="font-semibold">145,246,1</p>
        <p>{props?.data?.info || ""}</p>
      </div>
    </div>
  );
}
