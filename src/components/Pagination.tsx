import React from 'react';
import { PaginationType } from '../types/PaginationType';



const Pagination: React.FC = () => {

    const [pages, setPages] = React.useState<PaginationType[]>([]);

    React.useState(()=>{
        setPages([
            {page: '1',status:'active'},
            {page: '2',status:'-'},
            {page: '3',status:'-'},
            {page: '4',status:'-'},
            {page: '...',status:'-'},
            {page: '10',status:'-'},
        ])
    });

  return (
    <>
    <div className="p-4 flex items-center justify-between text-gray-500">
        <button className="py-2 bg-slate-200 rounded-md px-4 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed  whitespace-nowrap">
          &lt; Prev
        </button>
        <div className="flex">
           { pages.map((pg, index) => (
                <button key={index} className={`px-2 rounded-sm ${pg.status=='active'? 'bg-onaxSky':''}`}>{pg.page}</button>
           ))}
        </div>
        <button className="py-2 bg-slate-200 rounded-md px-4 text-xs font-semibold disabled:opacity-50 whitespace-nowrap">Next &gt;</button>
    </div>
    </>
  )
}

export default Pagination