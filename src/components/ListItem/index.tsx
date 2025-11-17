import { useState } from "react";
import { Checkmark } from "../Checkmark";
import clsx from "clsx";

type Props = {
  label: string;
  checked: boolean;
};

export const ListItem: React.FC<Props> = ({ label }) => {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => setChecked((prev) => !prev);
  return (
    <div
      className="group font-mont text-sm leading-[130%] text-[#1F2128] flex justify-between pt-2.5 pb-[9px] px-3.5"
      onClick={handleToggle}
    >
      <div className="flex items-center">{label}</div>
      <div
        className={clsx(
          "flex justify-center items-center w-[23px] h-[23px] border border-[#e1e1e1] rounded-md",
          {
            "text-white group-hover:text-[#E3E3E3] group-active:text-[#878787] group-active:border-[#bdbdbd]":
              !checked,
            "text-white bg-[#2469F6] group-hover:bg-[#5087F8]": checked,
          }
        )}
      >
        <Checkmark />
      </div>
    </div>
  );
};
