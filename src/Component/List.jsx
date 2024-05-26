import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
export default function List({people , delData , filterTags , query}) {
  return (
    <div>
          <div className="flex justify-center bg-slate-200 w-96 ml-[530px] p-12  shadow-lg rounded-2xl shadow-slate-800">
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
              <div className="flex flex-row  p-3 mb-4 rounded-xl shadow-xl dark: bg-[#039BE5]" key={node.id}>
                <img src="src/hand.png" className="h-24 w-24 " alt="" />
                <div className="flex">
                  <li className='mt-8 mr-2 dark:text-black'>{node.title}</li>
                  <MdDeleteOutline
                    className="cursor-pointer font-bold mt-8 dark:text-black"
                    onClick={() => delData(node.id)}
                  />
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
