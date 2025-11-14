import AINLogo from "@/assets/svg/AIN-log.svg";
import { IconButton } from "@/shared/component/IconButton";

export const GenericHeader = () => (
  <header className="flex justify-between items-center py-2">
    <div className="flex items-end">
      {/* <IconButton icon={AINLogo} alt="logo" /> */}
      <img src={AINLogo} alt="logo" className="w-[128px] h-[40px]" />
    </div>
    <div className="flex flex-col justify-between w-6 h-[18px] cursor-pointer space-y-1">
      <span className="block h-[3px] w-full bg-black rounded-sm"></span>
      <span className="block h-[3px] w-full bg-black rounded-sm"></span>
      <span className="block h-[3px] w-full bg-black rounded-sm"></span>
    </div>
  </header>
);
