import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { createSvgIcon } from '@mui/material/utils';
// import DeleteIcon from '@mui/icons-material/Delete';
import { TbEdit } from "react-icons/tb";
import Input from '@mui/joy/Input';
import { FiSave } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";
const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);
export default function List({people , delData , quntity , filterTags , query , personId , newPerson, startEdit , changeEdit , saveEdit , cancelEdit}) {
  return (
    <div>
          <div className="flex  justify-center bg-slate-200 mb-14 w-[600px] ml-[430px] p-12  shadow-lg rounded-2xl shadow-slate-800 dark:bg-slate-500 ">
        <div>
         
        </div>
  
        <ul>

          
      

          {people
            .filter((node) =>
              filterTags.length > 0
                ? filterTags.every((filterTag) =>
                    node.tags.map((tag) => tag.slug).includes(filterTag)
                  )
                : true
            )
            .filter((item) => {
              const tags = item.tags.map((tag) => tag.title).join(" ");
              return item.title.includes(query) || tags.includes(query);
            })
            .map((node) => (
              <div className="flex flex-row items-center justify-center  text-black bg-lime-500
               p-3 mb-4 rounded-md shadow-slate-700 shadow-md dark:bg-slate-200 dark:text-white  w-96" key={node.id}>
                <img src="src/hand.png" className="h-24 w-24 " alt="" />
                <div className="flex flex-row justify-center items-center mr-3">
                  <li className='mt-8 mr-2 dark:text-black' key={node.title}>
                    {personId === node.id?(
                      <div className=' flex flex-row' >
                          <Input
                  type="text"
                  name="name"
                  value={newPerson.title}
                  onChange={changeEdit}
                  className='mb-8'
                />
                <FiSave onClick={saveEdit} className='mt-1 ml-1 w-6 h-8' />
                <FcCancel onClick={cancelEdit} className='mt-1 ml-1 w-6 h-8'  />
                      </div>
                    ) :(
                   <div className='flex flex-row mt-2 '>
                    <div className='flex justify-center '>
                    {node.title}
                    </div>
                 
                    <button variant="outlined" color="error" className=" mx-4 px-2 py-1 mb-6 " onClick={() => delData(node.id)} >
                   
                    <DeleteIcon className=' mb-4  '  />
                    </button>


                   

                    
                  
                  
      <TbEdit onClick={() => startEdit(node)} className='cursor-pointer w-12 h-6 mt-1  ' />
                   <div className='flex flex-row '>
                   {
  quntity == 1 ? (
    // <button className='bg-slate-400 w-12 h-6 shadow-slate-300 shadow-inner '>+Add</button>
    <PlusIcon color="secondary" />

  ) : 
    null
  
}
                   </div>
                   </div>

                    )
                  }
                  </li>
                  
                  <div>
                  {/* <IconButton aria-label="delete" disabled color="primary" onClick={() => delData(node.id)}>
        <MdDeleteOutline   />
      </IconButton> */}
                  </div>
                  
                </div>
              </div>
            ))}
        </ul>
      
      </div>
    </div>
  )
}
