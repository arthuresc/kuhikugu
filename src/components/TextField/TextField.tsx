import React from 'react'
import { BiSearch } from 'react-icons/bi'

// active:shadow-[0_-0px_10px_rgba(199,56,56)] focus-within:shadow-[0_-0px_10px_rgba(199,56,56)]

function TextField() {
  return (
            <form
              className="
              flex justify-center items-center border
              px-2 py-1 w-2/5 md:w-1/2 max-w-md
              border-neutral-100 shadow-xs shadow-neutral-100 rounded-lg
              focus-within:border-neutral-300 active:border-neutral-200"
              role="search"
              action=""
            >
              <input
                className="flex-1 bg-transparent outline-none"
                type="text"
                id="pesquisa"
                placeholder="Pesquisar..."
              />
              <button className="ml-2" type="submit">
                <BiSearch className='text-neutral-500' />
              </button>
            </form>
  )
}

export default TextField