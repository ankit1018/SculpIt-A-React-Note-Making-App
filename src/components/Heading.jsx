import { useState } from "react";
import Button from "@mui/material/Button";

export default function Heading(props) {
  const [dark, setDark] = useState(false);

  function clicked() {
    setDark(!dark);
    props.onclick();
  }

  return (
    <div
      style={dark ? { backgroundColor: "#171717", color: "gray" } : null}
      className="header_div"
    >
      <h1 className="title">Sculp It</h1>
      <Button
        style={
          dark
            ? {
                color: "gray",
                position: "absolute",
                right: "270px",
                top: "24px"
              }
            : {
                color: "white",
                position: "absolute",
                right: "270px",
                top: "24px"
              }
        }
        variant="text"
        onClick={props.onclicklogout}
      >
        Logout
      </Button>
      {/* <button
        className="howto"
        style={
          dark
            ? { backgroundColor: "#171717", color: "gray", right: "280px" }
            : { right: "280px" }
        }
        onClick={props.onclicklogout}
      >
        Logout
      </button> */}
      <Button
        style={
          dark
            ? {
                color: "gray",
                position: "absolute",
                right: "170px",
                top: "24px"
              }
            : {
                color: "white",
                position: "absolute",
                right: "170px",
                top: "24px"
              }
        }
        variant="text"
        onClick={props.onclickhow}
      >
        How to?
      </Button>
      {/* <button
        style={dark ? { backgroundColor: "#171717", color: "gray" } : null}
        className="howto"
        onClick={props.onclickhow}
      >
        How to?
      </button> */}
      <Button
        style={
          dark
            ? {
                color: "white",
                backgroundColor: "black",
                position: "absolute",
                right: "30px",
                top: "24px"
              }
            : {
                color: "white",
                backgroundColor: "black",
                position: "absolute",
                right: "30px",
                top: "24px"
              }
        }
        variant="contained"
        onClick={clicked}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </Button>
      {/* <button
        className="dark"
        style={dark ? { backgroundColor: "#423F3E" } : null}
        onClick={clicked}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button> */}
    </div>
  );
}
