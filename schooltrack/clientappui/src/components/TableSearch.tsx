import React from 'react'

const TableSearch: React.FC = () => {

  const searchBarRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
        <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <img src='/images/search.png' alt='Search' width={14} height={14} onClick={() => searchBarRef.current?.focus()} />
            <input ref={searchBarRef} type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
        </div>
    </>
  )
}

export default TableSearch