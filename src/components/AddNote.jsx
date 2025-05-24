import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [select, setSelect] = useState(false);

  function type(event) {
    var a = event.target.name;
    let value = event.target.value.slice(0, 200);
    setNote({ ...note, [a]: value });
  }

  function clickSelect() {
    setSelect(true);
  }

  const [alignment, setAlignment] = useState("black");

  function colorclick(event) {
    setAlignment(event.target.name);
    props.clickcolor(alignment);
  }

  return (
    <Zoom in={true}>
      <div
        className="addnote"
        style={props.mode ? { backgroundColor: "#171010" } : null}
      >
        {select && (
          <Zoom in={true}>
            <input
              spellCheck="false"
              style={
                props.mode
                  ? { backgroundColor: "#171010", color: "#61677A" }
                  : { color: alignment }
              }
              name="title"
              onChange={type}
              className="i addtitle"
              placeholder="Title"
              value={note.title}
            />
          </Zoom>
        )}
        <textarea
          spellCheck="false"
          style={
            props.mode
              ? { backgroundColor: "#171010", color: "#61677A" }
              : { color: alignment }
          }
          onClick={clickSelect}
          name="content"
          onChange={type}
          type="text"
          className="i addcontent"
          placeholder="Take a note"
          value={note.content}
          rows={select ? 3 : 1}
        />
        {select && props.mode === false && (
          <ButtonGroup
            style={{
              position: "absolute",
              right: "40px",
              top: "20px"
            }}
            color="primary"
            variant="text"
          >
            <Button
              style={{
                height: "25px",
                color: "black",
                borderColor: "pink"
              }}
              value="black"
              onClick={colorclick}
              name="black"
            >
              B
            </Button>
            <Button
              style={{
                height: "25px",
                color: "red",
                borderColor: "pink"
              }}
              value="red"
              onClick={colorclick}
              name="red"
            >
              R
            </Button>
            <Button
              style={{
                height: "25px",
                color: "green",
                borderColor: "pink"
              }}
              value="green"
              onClick={colorclick}
              name="green"
            >
              G
            </Button>
          </ButtonGroup>
        )}
        {select && (
          <Zoom in={true}>
            <Fab
              // style={{ backgroundColor: "#ff8989" }}
              style={
                props.mode
                  ? {
                      backgroundColor: "#423F3E",
                      color: "#171010"
                    }
                  : { backgroundColor: "#ff8989" }
              }
              size="medium"
              color="primary"
              aria-label="add"
              mode={props.mode}
              onClick={() => {
                if (note.content !== "") {
                  props.onclick(note);
                  setNote({
                    title: "",
                    content: ""
                  });
                }
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
        {/* <Button
        mode={props.mode}
        onclick={() => {
          props.onclick(note);
          setNote({
            title: "",
            content: ""
          });
        }}
      /> */}
      </div>
    </Zoom>
  );
}
