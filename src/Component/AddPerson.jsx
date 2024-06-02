import React from 'react'

export default function AddPerson({setAddPerson , addPerson , addNewPerson}) {
  return (
    <div>
         <div className="flex items-center justify-center ml-8 gap-4 -mt-1 mb-4 ">
         <input type="text" placeholder="Add New person" className="input input-bordered input-md w-full max-w-xs"onKeyDown={addNewPerson}
           value={addPerson.title}
          onChange={(e) => setAddPerson({ ...addPerson, title: e.target.value })}  />

<select
          className="m-1 btn ml-1"
          onChange={(e) => setAddPerson({ ...addPerson, slug: e.target.value })}
          value={addPerson.slug}
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
<button className="tn btn-active btn" onClick={addNewPerson}>Add person</button>
</div>

    </div>
  )
}

