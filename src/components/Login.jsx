import { useState } from "react";
import Button from "@mui/material/Button";

export default function Login(props) {
  const [passcode, setPasscode] = useState("");
  const [tryAgain, setTryAgain] = useState(false);

  function wrong() {
    setTryAgain(true);
    setPasscode("");
  }

  function type(event) {
    setPasscode(event.target.value);
  }

  return (
    <div>
      <div className="login_box">
        <h1>Sculp It</h1>
        <p className="pass">Enter password</p>
        <p className="hint">Hint: The passqord is "ankit"</p>
        <input onChange={type} type="password" placeholder="Password" />
        <Button
          style={{ height: "28px" }}
          color="primary"
          variant="contained"
          onClick={passcode === "ankit" ? props.onclick : wrong}
        >
          Login
        </Button>
        {tryAgain && <p>Try Again</p>}
      </div>
    </div>
  );
}
