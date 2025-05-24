export default function Note(props) {
  var a = new Date();
  const [date, time] = [
    a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear(),
    a.getHours() + ":" + a.getMinutes()
  ];

  return (
    <div
      className="note_box"
      style={
        props.mode ? { backgroundColor: "#171010", color: "#61677A" } : null
      }
    >
      <h3>{props.title}</h3>
      <p>{props.content.slice(0, 200)}</p>
      <p
        className="date"
        style={props.mode ? { color: "#423F3E", fontWeight: "bold" } : null}
      >
        {date} {time}
      </p>
      <button
        style={
          props.mode ? { backgroundColor: "#171010", color: "#423F3E" } : null
        }
        onClick={() => {
          props.onclick(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}
