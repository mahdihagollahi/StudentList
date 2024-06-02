import React from 'react'
import { IoCartOutline } from "react-icons/io5";
export default function Navbar({query , setQuery , filterCheckBox}) {
  return (
    <div>
         <div className="navbar bg-white rounded-xl  shadow-slate-200 border-inherit  shadow-xl">
        <div className="flex-1 rounded-xl px-2 lg:flex-none">
          <a className="text-xl rounded-xl font-semibold">Student List</a>
        </div>
        <div className="w-[90%] flex items-center justify-center gap-5 mb-5 ">
          <input
            className="p-2 h-12 mt-5 border-inherit rounded-xl w-96 bg-white shadow-inner shadow-gray-300"
            type="text"
            name="search"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex  flex-1 px-2">
          <div className="flex items-stretch">
            <button className="btn btn-ghost rounded-btn">
            <IoCartOutline className='text-blue-800 w-8 h-12 relative rounded-full' variant="outline-primary" />
            <div className='rounded-full bg-red-600 text-white justify-center items-center flex w-5 h-5 absolute mt-14 ' style={{button:'0' , top:'0' , transform:'translate(-25% , -25%)'}}>3</div>
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                Skills
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                {[
                  "react",
                  "php",
                  "python",
                  "html",
                  "vite",
                  "tailwind",
                  "css",
                ].map((tag, index) => (
                  <div className="form-control" key={index}>
                    <label className="cursor-pointer label" htmlFor={tag}>
                      <span className="label-text">{tag}</span>
                      <input
                        type="checkbox"
                        onChange={filterCheckBox}
                        value={tag}
                        className="checkbox checkbox-info"
                      />
                    </label>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
