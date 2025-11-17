import clsx from "clsx";

type Props = {
  className?: string;
};
export const Seperator: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx("w-full py-2.5 max-h-5 px-3.5 mx-auto", className)}>
      <hr className="border-t-[#CDCDCD] border-t-[0.7px]" />
    </div>
  );
};
