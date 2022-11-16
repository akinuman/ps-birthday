import clsx from "clsx";

const PartnerBallon = ({
  fullName,
  distance,
  lat,
  lng,
}: {
  fullName: string;
  distance: number;
  lat: string;
  lng: string;
}) => {
  const isDistanceLessThan100Km = distance < 100 ? true : false;
  return (
    <div
      className={clsx(
        "min-w-[100px] p-1.5 rounded-md text-white",
        isDistanceLessThan100Km ? "bg-lightBlue" : "bg-pink"
      )}
    >
      <div className="t-14">{fullName}</div>
      <div>{distance} KM</div>
    </div>
  );
};

export default PartnerBallon;
