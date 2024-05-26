import { useState } from "react";
import Navbar from "../Component/Navbar";
import AddPerson from "../Component/AddPerson";
import List from "../Component/List";



export default function Home() {
  const [people , setPeople] = useState([
    {
      id: 1,
      title: "Reyhane Kian",
      tags: [
        {
          id: "tag1",
          title: "React",
          slug: "react",
        },
        {
          id: "tag2",
          title: "Html",
          slug: "html",
        },
        {
          id: "tag3",
          title: "Css",
          slug: "css",
        },
        {
          id: "tag4",
          title: "Tailwind",
          slug: "tailwind",
        },
      ],
    },
    {
      id: 2,
      title: "Mahdi Askarani",
      tags: [
        {
          id: "tag5",
          title: "Vite",
          slug: "vite",
        },
        {
          id: "tag6",
          title: "Php",
          slug: "php",
        },
        {
          id: "tag7",
          title: "Python",
          slug: "python",
        },
        {
          id: "tag8",
          title: "Html",
          slug: "html",
        },
      ],
    },
    {
      id: 3,
      title: "Mahtab Khajir",
      tags: [
        {
          id: "tag1",
          title: "React",
          slug: "react",
        },
        {
          id: "tag2",
          tittle: "Html",
          slug: "html",
        },
        {
          id: "tag3",
          title: "Css",
          slug: "css",
        },
        {
          id: "tag4",
          title: "Tailwind",
          slug: "tailwind",
        },
      ],
    },
    {
      id: 4,
      title: "Farnam Dehghan",
      tags: [
        {
          id: "tag5",
          title: "Vite",
          slug: "vite",
        },
        {
          id: "tag6",
          title: "Php",
          slug: "php",
        },
        {
          id: "tag7",
          title: "Python",
          slug: "python",
        },
        {
          id: "tag8",
          title: "Html",
          slug: "html",
        },
      ],
    },
    {
      id: 5,
      title: "Sajedeh Samari",
      tags: [
        {
          id: "tag1",
          title: "React",
          slug: "react",
        },
        {
          id: "tag2",
          tittle: "Html",
          slug: "html",
        },
        {
          id: "tag3",
          title: "Css",
          slug: "css",
        },
        {
          id: "tag4",
          title: "Tailwind",
          slug: "tailwind",
        },
      ],
    },
    {
      id: 6,
      title: "Ali biazar",
      tags: [
        {
          id: "tag5",
          title: "Vite",
          slug: "vite",
        },
        {
          id: "tag6",
          title: "Php",
          slug: "php",
        },
        {
          id: "tag7",
          title: "Python",
          slug: "python",
        },
        {
          id: "tag8",
          title: "Html",
          slug: "html",
        },
      ],
    },
    {
      id: 7,
      title: "Moeid aali",
      tags: [
        {
          id: "tag1",
          title: "React",
          slug: "react",
        },
        {
          id: "tag2",
          tittle: "Html",
          slug: "html",
        },
        {
          id: "tag3",
          title: "Css",
          slug: "css",
        },
        {
          id: "tag4",
          title: "Tailwind",
          slug: "tailwind",
        },
      ],
    },
    {
      id: 8,
      title: "Javad bafekr",
      tags: [
        {
          id: "tag5",
          title: "Vite",
          slug: "vite",
        },
        {
          id: "tag6",
          title: "Php",
          slug: "php",
        },
        {
          id: "tag7",
          title: "Python",
          slug: "python",
        },
        {
          id: "tag8",
          title: "Html",
          slug: "html",
        },
      ],
    },
  ]);

  const [filterTags, setFilterTags] = useState([]);
  const [query, setQuery] = useState("");
const [newPerson , setNewPerson]=useState({title : '' , slug : ''})


  
  const filterCheckBox = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  
  




  const delData = (id) => {
    const newData = people.filter((item) => item.id !== id);
    setPeople(newData);
  };

const addNewPerson = () =>{
  if(newPerson.title && newPerson.slug){
    setPeople([...people , {...newPerson , id : people.length+1 , tags:[{id: `tag${people.length+1}`, title:newPerson.title, slug:newPerson.slug}]}])
    setNewPerson({title : '' , slug: ''})
  }
}

 
 

  return (
    <div className="flex flex-col justify-center" >
      <Navbar query={query} setQuery={setQuery} filterCheckBox={filterCheckBox}/>
      
      <h2 className="font-semibold text-2xl text-[#2e2e2e] mt-6  pb-[40px] flex justify-center dark:text-white  ">
        List of Students
      </h2>

<AddPerson setNewPerson={setNewPerson} newPerson={newPerson} addNewPerson={addNewPerson}/>


<List people={people} delData={delData} filterTags={filterTags}  query={query}/>
      

     
    </div>
  );
}
