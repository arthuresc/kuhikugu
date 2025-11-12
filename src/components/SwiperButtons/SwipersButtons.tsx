import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import type { ReactElement } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';

interface SwipersButtons {
  children: ReactElement<any, any>;
  forward: Function;
  backward: Function;
  mode?: string;
  wrapper?: string;
}

function SwipersButtons({
  children,
  forward,
  backward,
  mode = 'default',
  wrapper,
}: SwipersButtons) {
  const [classWrapper, setClassWrapper] = useState('relative overflow-visible');

  const modeSelector = {
    default: () => {
      return (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-between text-3xl">
          <button
            className="group pointer-events-auto h-full mix-blend-overlay hover:bg-black/30 active:bg-black/50 px-2 py-1 transition-opacity duration-200 ease-out"
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
      );
    },

    circles: () => {
      return (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-between">
          <button
            className="group pointer-events-auto mix-blend-overlay p-3 text-4xl"
            onClick={(): void => forward()}
          >
            <IoIosArrowDropleftCircle className="mx-5 text-transparent group-hover:text-gray-400 group-active:text-gray-400 transform transition-transform duration-300 ease-out will-change-transform group-hover:scale-120" />
          </button>
          <button
            className="group pointer-events-auto mix-blend-overlay p-3 text-4xl"
            onClick={(): void => backward()}
          >
            <IoIosArrowDroprightCircle className="mx-5 text-transparent group-hover:text-gray-400 group-active:text-gray-400 transform transition-transform duration-300 ease-out will-change-transform group-hover:scale-120" />
          </button>
        </div>
      );
    },
  }[mode];

  const renderedMode = modeSelector ? modeSelector() : null;

  return (
    <>
      <div className={wrapper ?? classWrapper}>
        <div className="group flex flex-row justify-around items-end-safe transition-transform transition-all duration-700 ease-in-out">
          {children}
        </div>
        {renderedMode}
      </div>
    </>
  );
}

export default SwipersButtons;
