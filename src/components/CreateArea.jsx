import React, {useState} from "react";

function CreateArea(props) {
  const [note, changaNote]= useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value}= event.target;

    changaNote( prevValue =>{
      return{
        ...prevValue,
        [name] : value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    changaNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  return (
    <div>
      <form>

        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title} />

        <textarea onChange={handleChange}
         name="content" 
         value={note.content} 
         placeholder="Take a note..." rows="3" />

        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
