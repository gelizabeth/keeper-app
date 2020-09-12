import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  const [isZoomed, setIsZoomed] = useState(false);
  function handleClick() {
    setIsZoomed(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form className="create-note">
        {isZoomed && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
          />
        )}

        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={inputText.content}
          rows={isZoomed ? "3" : "1"}
        />
        <Zoom in={isZoomed}>
          <Fab
            style={{ display: isZoomed ? "block" : "none" }}
            onClick={(e) => {
              props.onAdd(inputText);
              setInputText({ title: "", content: "" });
              e.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
