import type { ReactElement } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

interface SwipersButtons {
  children: ReactElement<any, any>;
  forward: Function;
  backward: Function;
  wrapper?: string;
}

function SwipersButtons({children, forward, backward, wrapper}: SwipersButtons) {

  const [ classWrapper, setClassWrapper ] = useState('relative overflow-visible')

  return (
    <div className={wrapper ?? classWrapper}>
      <div className="flex flex-row justify-around items-end-safe">
        {children}
      </div>

      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-between">
        <button
          className="group pointer-events-auto h-full mix-blend-overlay hover:bg-black/30 active:bg-black/50 px-2 py-1"
          onClick={(): void => forward()}

        >
          <IoIosArrowBack className="mx-5 text-transparent group-hover:text-gray-400 group-active:text-gray-400" />
        </button>
        <button
          className="group pointer-events-auto h-full mix-blend-overlay hover:bg-black/30 active:bg-black/50 px-2 py-1"
          onClick={(): void => backward()}
        >
          <IoIosArrowForward className="mx-5 text-transparent  group-hover:text-gray-400 group-active:text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default SwipersButtons;
