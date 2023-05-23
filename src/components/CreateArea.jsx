import React, {useState} from "react";
import Add from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded]= useState(false);

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

  function expand(){
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note">

        {isExpanded && (
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title} />
        )}

        <textarea onChange={handleChange}
         onClick={expand}
         name="content" 
         value={note.content} 
         placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote} ><Add /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
