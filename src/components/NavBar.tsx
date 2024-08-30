import React from "react";
import Menu from "./Menu";

function NavBar() {
  return (
    <div className="flex items-center justify-center py-4 w-[95%] mx-auto 2xl:py-[1vw]">
      <div className="flex-[1]">
        <Menu />
      </div>
      <div className="flex-[1] flex items-center justify-end">
        <button
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0% 100%, 0 50%)",
          }}
          className="px-8 py-4 2xl:px-[2vw] 2xl:py-[1vw] 2xl:text-[1vw] 2xl:rounded-[0.175vw] bg-white text-black uppercase font-bold rounded-[3px] transition-colors hover:bg-black hover:text-white"
        >
          sign in
        </button>
      </div>
    </div>
  );
}

export default NavBar;
