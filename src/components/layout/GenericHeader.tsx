export const GenericHeader = () => (
  <header className="flex justify-between items-center py-2">
    <div></div>
    <div className="flex items-end">
      <svg
        width="40"
        height="30"
        viewBox="0 0 40 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.536 0L23.072 15L11.536 30H0L11.536 15L0 0H11.536Z"
          fill="#F1B93B"
        />
        <path
          d="M23.072 15L11.536 0H21.536L33.072 15L21.536 30H11.536L23.072 15Z"
          fill="#F8D479"
        />
      </svg>
      <div className="flex flex-col ml-2 leading-none">
        <span className="text-2xl font-bold tracking-[2px]">AIN</span>
        <span className="text-[8px] text-gray-400 tracking-[0.5px]">
          GOLD & DIAMONDS
        </span>
      </div>
    </div>
    <div className="flex flex-col justify-between w-6 h-[18px] cursor-pointer space-y-1">
      <span className="block h-[3px] w-full bg-black rounded-sm"></span>
      <span className="block h-[3px] w-full bg-black rounded-sm"></span>
      <span className="block h-[3px] w-full bg-black rounded-sm"></span>
    </div>
  </header>
);
