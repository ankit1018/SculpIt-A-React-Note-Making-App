import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import { useState } from "react";
import Login from "./Login";
import addp from "./add.png";
import deletep from "./delete.png";
import Zoom from "@mui/material/Zoom";

export default function App() {
  const [list, setList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dark, setDark] = useState(false);
  const [howTo, setHowTo] = useState(false);
  const [color, setColor] = useState("black");

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  function add(eve) {
    setList([...list, eve]);
  }

  function darkMode() {
    setDark(!dark);
  }

  function deleteBox(id) {
    setList(
      list.filter((value, index) => {
        return index !== id;
      })
    );
  }

  function how() {
    setHowTo(!howTo);
  }

  function close() {
    setHowTo(false);
  }

  function changecolor(eve) {
    setColor(eve);
  }

  return (
    <div
      className="full_app"
      style={dark ? { backgroundColor: "#423F3E" } : null}
    >
      {isLoggedIn ? (
        <div>
          <Heading onclick={darkMode} onclickhow={how} onclicklogout={logout} />
          <AddNote onclick={add} mode={dark} clickcolor={changecolor} />
          {howTo && (
            <Zoom in={true} out={true}>
              <div
                style={
                  dark
                    ? { backgroundColor: "#171717", color: "gray" }
                    : { color: color }
                }
                className="howtodiv"
              >
                <h2>How to?</h2>
                <button onClick={close}>X</button>
                <h3>Add Content</h3>
                <img className="img1" src={addp} alt="add" />
                <p>Add title and note and click the plus icon to save it.</p>
                <h3>Delete Content</h3>
                <img className="img2" src={deletep} alt="delete" />
                <p style={{ marginTop: "90px" }}>
                  Click the delete button to delete a note
                </p>
              </div>
            </Zoom>
          )}
          <div style={{ color: color }} className="Outer_div">
            {list.map((eve, index) => (
              <Note
                key={index}
                id={index}
                title={eve.title}
                content={eve.content}
                mode={dark}
                onclick={deleteBox}
              />
            ))}
          </div>
          <Footer />
        </div>
      ) : (
        <Login onclick={login} />
      )}
    </div>
  );
}
