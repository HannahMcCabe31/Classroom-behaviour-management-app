import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit event fired");

    props.addEggItem({
      name,
    });

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Student Name:
        <input
          type="text"
          name="student-name"
          value={name} // Add this line to bind the input value to the state
          onChange={(e) => setName(e.target.value)} // Add this line for input change handling
        />
      </label>
      <button className="addButton">Add</button>
    </form>
  );
}
