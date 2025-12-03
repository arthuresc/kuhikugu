import type { ReactElement } from "react";

type ButtonProps = {
  type?: 'cta' | 'warning';
  title?: string | boolean;
}

type ButtonStyle = {
  cta: string;
  warning: string;
}

function Button({ type = 'cta', title = false }: ButtonProps): ReactElement {

  const types: ButtonStyle = {
    cta: 'bg-orange-400 hover:bg-orange-400 active:bg-orange-500 text-amber-50 leading-6 px-4 py-2 mx-2 my-4',
    warning: 'bg-red-400 hover:bg-red-500 active:bg-red-700 text-red-50 leading-6 px-4 py-2 mx-2 my-4'
  }

  return (
    <>
      <button className={types[type]}>
        {title ?? 'Ok'}
      </button>
    </>
  );
}

export default Button;
