import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr]= useState([]);

  function addText(note){
    setArr((prevValue) => {
      return (
        [...prevValue, note]
      );
    });
  }

  function deleteItem(id){
    setArr( prevValue =>{
      return prevValue.filter((item, index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addText} />

      {arr.map((text,index)=>(
         <Note onDelete={deleteItem} key={index} id={index} title={text.title}
         content={text.content} />
          ))}

      <Footer />
    </div>
  );
}

export default App;
