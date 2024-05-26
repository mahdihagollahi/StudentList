import React from 'react'

export default function AddPerson({setNewPerson , newPerson , addNewPerson}) {
  return (
    <div>
         <div className="flex items-center justify-center ml-8 -mt-1 mb-4 ">
<input type="text" placeholder="Add New person" className="input mr-2  input-bordered input-success w-full max-w-xs" onKeyDown={addNewPerson}  value={newPerson.title}
          onChange={(e) => setNewPerson({ ...newPerson, title: e.target.value })}  />

<select
          className="m-1 btn ml-1"
          onChange={(e) => setNewPerson({ ...newPerson, slug: e.target.value })}
          value={newPerson.slug}
        >
          <option value="">Select Skill</option>
          <option value="react">React</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
          <option value="vite">Vite</option>
          <option value="tailwind">Tailwind</option>
          <option value="css">CSS</option>
        </select>
<button className="btn btn-primary ml-1 dark:btn " onClick={addNewPerson}>Add person</button>
</div>

    </div>
  )
}
