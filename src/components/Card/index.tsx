type Props = {
  children: React.ReactNode;
};
export const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white border border-[#EEEEEE] py-2.5 w-[370px] rounded-md shadow-[0px_8px_15px_0px_#1414141F]">
      {children}
    </div>
  );
};
