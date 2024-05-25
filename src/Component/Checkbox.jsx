// import { useState } from 'react'
// import { MdDeleteOutline } from "react-icons/md";
// export default function Filter() {
//   const DATA = [
//     {
//       id: 1,
//       title: 'Reyhane Kian',
//       tags: [
//         {
//           id: 'tag1',
//           title: 'React',
//           slug: 'react',
//         },
//         {
//           id:'tag2',
//           title : "Html",
//           slug : 'html'
//        },
//        {
//         id:'tag3',
//         title : "Css",
//         slug : 'css'
//      },
//      {
//       id:'tag4',
//       title : "Tailwind",
//       slug : 'tailwind'
//    },
//       ],
//     },
//     {
//       id: 2,
//       title: 'Mahdi Askarani',
//       tags: [
//         {
//           id:'tag5',
//           title : "Vite",
//           slug : 'vite'
//        },
//        {
//         id:'tag6',
//         title : "Php",
//         slug : 'php'
//      },
//      {
//       id:'tag7',
//       title : "Python",
//       slug : 'python'
//    },
//    {
//     id:'tag8',
//     title : "Html",
//     slug : 'html'
//  },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Mahtab Khajir',
//       tags: [
//         {
//           id:'tag1',
//           title : "React",
//           slug : 'react'
//        },
//        {
//           id:'tag2',
//           tittle : "Html",
//           slug : 'html'
//        },
//        {
//           id:'tag3',
//           title : "Css",
//           slug : 'css'
//        },
//        {
//           id:'tag4',
//           title : "Tailwind",
//           slug : 'tailwind'
//        },
//       ],
//     },
//     {
//       id: 4,
//       title: 'Farnam Dehghan',
//       tags: [
//         {
//           id:'tag5',
//           title : "Vite",
//           slug : 'vite'
//        },
//        {
//           id:'tag6',
//           title : "Php",
//           slug : 'php'
//        },
//        {
//           id:'tag7',
//           title : "Python",
//           slug : 'python'
//        },
//        {
//           id:'tag8',
//           title : "Html",
//           slug : 'html'
//        },
//       ],
//     },
//     {
//       id: 5,
//       title: 'Sajedeh Samari',
//       tags: [
//         {
//           id:'tag1',
//           title : "React",
//           slug : 'react'
//        },
//        {
//           id:'tag2',
//           tittle : "Html",
//           slug : 'html'
//        },
//        {
//           id:'tag3',
//           title : "Css",
//           slug : 'css'
//        },
//        {
//           id:'tag4',
//           title : "Tailwind",
//           slug : 'tailwind'
//        },
//       ],
//     },
//     {
//       id: 6,
//       title: 'Ali biazar',
//       tags: [
//         {
//           id:'tag5',
//           title : "Vite",
//           slug : 'vite'
//        },
//        {
//           id:'tag6',
//           title : "Php",
//           slug : 'php'
//        },
//        {
//           id:'tag7',
//           title : "Python",
//           slug : 'python'
//        },
//        {
//           id:'tag8',
//           title : "Html",
//           slug : 'html'
//        },
//       ],
//     },
//     {
//       id: 7,
//       title: 'Moeid aali',
//       tags: [
//         {
//           id:'tag1',
//           title : "React",
//           slug : 'react'
//        },
//        {
//           id:'tag2',
//           tittle : "Html",
//           slug : 'html'
//        },
//        {
//           id:'tag3',
//           title : "Css",
//           slug : 'css'
//        },
//        {
//           id:'tag4',
//           title : "Tailwind",
//           slug : 'tailwind'
//        },
//       ],
//     },
//     {
//       id: 8,
//       title: 'Javad bafekr',
//       tags: [
//         {
//           id:'tag5',
//           title : "Vite",
//           slug : 'vite'
//        },
//        {
//           id:'tag6',
//           title : "Php",
//           slug : 'php'
//        },
//        {
//           id:'tag7',
//           title : "Python",
//           slug : 'python'
//        },
//        {
//           id:'tag8',
//           title : "Html",
//           slug : 'html'
//        },
//       ],
//     },
//   ]

//   const [filterTags, setFilterTags] = useState([])
// const [query, setQuery] = useState('');
// const [data, setData] = useState(DATA);


//   const filteredDATA = DATA.filter((node) =>
//     filterTags.length > 0
//       ? filterTags.every((filterTag) =>
//           node.tags.map((tag) => tag.slug).includes(filterTag)
//         )
//       : data
//   )

//   const filterHandler = (event) => {
//     if (event.target.checked) {
//       setFilterTags([...filterTags, event.target.value])
//     } else {
//       setFilterTags(
//         filterTags.filter((filterTag) => filterTag !== event.target.value)
//       )
//     }
    
//   }


//   const clearTitles = () => {
//     const newData = data.map(item => ({ ...item, title: '' }));
//     setData(newData);
//   };





// const searchData = DATA.filter(item => {
//     const tags = item.tags.map(tag => tag.name).join(' ');
//     return item.title.includes(query) || tags.includes(query);
//   });

//   const delData = (id) => {
//     const newData = data.filter(item => item.id !== id);
//     setData(newData);
//   };

//   return (
//     <div className='Continner'>
//       <h2 className='font-semibold text-2xl text-[#2e2e2e] mt-[120px]  mb-[25px] '>list of student </h2>
//         <div className='flex gap-96' >


//         {/* <div>
   
//    <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">React</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="react"
       
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>



//      <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">PHP</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="php"
      
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>



//      <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">Python</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="python"
         
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>




//      <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">Html</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="html"
         
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>



//      <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">Vite</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="vite"
         
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>

//      <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">Tailwind</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="tailwind"
         
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>

//      <div className="form-control">
//      <label className="cursor-pointer label" htmlFor="react">
//      <span className="label-text">Css</span>
//        <input
//          type="checkbox"
//          onChange={filterHandler}
//          value="css"
         
//           className="checkbox checkbox-info"  
//        />
     
//      </label>
//      </div>
//         </div> */}

// <div>
//           {['react', 'php', 'python', 'html', 'vite', 'tailwind', 'css'].map((tag, index) => (
//             <div className="form-control" key={index}>
//               <label className="cursor-pointer label" htmlFor={tag}>
//                 <span className="label-text">{tag}</span>
//                 <input
//                   type="checkbox"
//                   onChange={filterHandler}
//                   value={tag}
//                   className="checkbox checkbox-info"
//                 />
//               </label>
//             </div>
//           ))}
//         </div>

//         <ul>
//           {searchData.map((node) => (
//             <div className='card' key={node.id}>
//               <p className='num_text'>{node.id}</p>
//               <div className='flex'>
//                 <li>{node.title}</li>
//                 <MdDeleteOutline
//                   className='cursor-pointer font-bold'
//                   onClick={() => {delData(node.id)}}
//                 />
//               </div>
//             </div>
//           ))}
//         </ul>
//         <MdDeleteOutline
//                   className='cursor-pointer font-bold'
//                   onClick={clearTitles}
//                 />
       
//       </div>
      
   

//       <div className='w-[90%] flex items-center justify-center gap-5 mb-5 '>
//          <input type="text" name='search' placeholder='search'value={query}
//         onChange={(e) => setQuery(e.target.value)}
//           />
//          </div> 
        
     
    
//     </div>
//   )
// }

import { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";

export default function Filter() {
  const DATA = [
     {
      id: 1,
      title: 'Reyhane Kian',
      tags: [
        {
          id: 'tag1',
          title: 'React',
          slug: 'react',
        },
        {
          id:'tag2',
          title : "Html",
          slug : 'html'
       },
       {
        id:'tag3',
        title : "Css",
        slug : 'css'
     },
     {
      id:'tag4',
      title : "Tailwind",
      slug : 'tailwind'
   },
      ],
    },
    {
      id: 2,
      title: 'Mahdi Askarani',
      tags: [
        {
          id:'tag5',
          title : "Vite",
          slug : 'vite'
       },
       {
        id:'tag6',
        title : "Php",
        slug : 'php'
     },
     {
      id:'tag7',
      title : "Python",
      slug : 'python'
   },
   {
    id:'tag8',
    title : "Html",
    slug : 'html'
 },
      ],
    },
    {
      id: 3,
      title: 'Mahtab Khajir',
      tags: [
        {
          id:'tag1',
          title : "React",
          slug : 'react'
       },
       {
          id:'tag2',
          tittle : "Html",
          slug : 'html'
       },
       {
          id:'tag3',
          title : "Css",
          slug : 'css'
       },
       {
          id:'tag4',
          title : "Tailwind",
          slug : 'tailwind'
       },
      ],
    },
    {
      id: 4,
      title: 'Farnam Dehghan',
      tags: [
        {
          id:'tag5',
          title : "Vite",
          slug : 'vite'
       },
       {
          id:'tag6',
          title : "Php",
          slug : 'php'
       },
       {
          id:'tag7',
          title : "Python",
          slug : 'python'
       },
       {
          id:'tag8',
          title : "Html",
          slug : 'html'
       },
      ],
    },
    {
      id: 5,
      title: 'Sajedeh Samari',
      tags: [
        {
          id:'tag1',
          title : "React",
          slug : 'react'
       },
       {
          id:'tag2',
          tittle : "Html",
          slug : 'html'
       },
       {
          id:'tag3',
          title : "Css",
          slug : 'css'
       },
       {
          id:'tag4',
          title : "Tailwind",
          slug : 'tailwind'
       },
      ],
    },
    {
      id: 6,
      title: 'Ali biazar',
      tags: [
        {
          id:'tag5',
          title : "Vite",
          slug : 'vite'
       },
       {
          id:'tag6',
          title : "Php",
          slug : 'php'
       },
       {
          id:'tag7',
          title : "Python",
          slug : 'python'
       },
       {
          id:'tag8',
          title : "Html",
          slug : 'html'
       },
      ],
    },
    {
      id: 7,
      title: 'Moeid aali',
      tags: [
        {
          id:'tag1',
          title : "React",
          slug : 'react'
       },
       {
          id:'tag2',
          tittle : "Html",
          slug : 'html'
       },
       {
          id:'tag3',
          title : "Css",
          slug : 'css'
       },
       {
          id:'tag4',
          title : "Tailwind",
          slug : 'tailwind'
       },
      ],
    },
    {
      id: 8,
      title: 'Javad bafekr',
      tags: [
        {
          id:'tag5',
          title : "Vite",
          slug : 'vite'
       },
       {
          id:'tag6',
          title : "Php",
          slug : 'php'
       },
       {
          id:'tag7',
          title : "Python",
          slug : 'python'
       },
       {
          id:'tag8',
          title : "Html",
          slug : 'html'
       },
      ],
    },
  ]

  const [filterTags, setFilterTags] = useState([]);
  const [query, setQuery] = useState('');
  const [data, setData] = useState(DATA);
  const [searchResults, setSearchResults] = useState([]);

  // const filteredDATA = data.filter((node) =>
  //   filterTags.length > 0
  //     ? filterTags.every((filterTag) =>
  //         node.tags.map((tag) => tag.slug).includes(filterTag)
  //       )
  //     : data
  // );

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(filterTags.filter((filterTag) => filterTag !== event.target.value));
    }
  };

 

  // const searchData = data.filter(item => {
  //   const tags = item.tags.map(tag => tag.title).join(' ');
  //   return item.title.includes(query) || tags.includes(query);
  // });

  const delData = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };


  const AddNewTodo = (event) =>{
     
    if (event.key === "Enter" && event.target.value !== '') {
    const newData = {
      id: data.length + 1,
      title: event.target.value,
        tags: [],
      
    };
   
    setSearchResults([...searchResults, newData]);
event.target.value = "";
}

  }


  return (
    <div className='Continner'>
      <div className="navbar bg-base-300 rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
    <a className="text-lg font-bold">daisyUI</a>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
      <a className="btn btn-ghost rounded-btn">Button</a>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        {['react', 'php', 'python', 'html', 'vite', 'tailwind', 'css'].map((tag, index) => (
            <div className="form-control" key={index}>
              <label className="cursor-pointer label" htmlFor={tag}>
                <span className="label-text">{tag}</span>
                <input
                  type="checkbox"
                  onChange={filterHandler}
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

<div className='w-[90%] flex items-center justify-center gap-5 mb-5'>
        <input
        className="input input-bordered input-primary w-full max-w-xs"
          type="text"
          name='search'
          placeholder='search'
          value={query}
          // onKeyDown={AddNewTodo }
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>


      <h2 className='font-semibold text-2xl text-[#2e2e2e] mt-[120px] mb-[25px]'>List of Students</h2>
      <div className='flex gap-96'>
        
        <div>
          {/* {['react', 'php', 'python', 'html', 'vite', 'tailwind', 'css'].map((tag, index) => (
            <div className="form-control" key={index}>
              <label className="cursor-pointer label" htmlFor={tag}>
                <span className="label-text">{tag}</span>
                <input
                  type="checkbox"
                  onChange={filterHandler}
                  value={tag}
                  className="checkbox checkbox-info"
                />
              </label>
            </div>
          ))} */}
        </div>
        
        <ul>
        
          {/* {searchData.map((node) => (
            <div className='card' key={node.id}>
              <p className='num_text'>{node.id}</p>
              <div className='flex'>
                <li>{node.title}</li>
                <MdDeleteOutline
                  className='cursor-pointer font-bold'
                  onClick={() => delData(node.id)}
                />
              </div>
            </div>
          ))} */}

{data.filter((node) =>
            filterTags.length > 0
              ? filterTags.every((filterTag) =>
                  node.tags.map((tag) => tag.slug).includes(filterTag)
                )
              : true
          )
          .filter(item => {
            const tags = item.tags.map(tag => tag.title).join(' ');
            return item.title.includes(query) || tags.includes(query);
          })
          .map((node) => (
            <div className='card' key={node.id}>
              <p className='num_text'>{node.id}</p>
              <div className='flex'>
                <li>{node.title}</li>
                <MdDeleteOutline
                  className='cursor-pointer font-bold'
                  onClick={() => delData(node.id)}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
      
      <div className='mt-5'>
        <h3 className='font-semibold text-xl text-[#2e2e2e]'>Search Results:</h3>
        <ul>
          {searchResults.map((item) => (
            <div className='card' key={item.id}>
              <div className='flex'>
                <li>{item.title}</li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
