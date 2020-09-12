import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(inputText) {
    setNoteList((prev) => {
      return [...prev, inputText];
    });
  }

  function deleteNote(id) {
    setNoteList((prev) => {
      return prev.filter((elem, i) => {
        return i !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((item, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
