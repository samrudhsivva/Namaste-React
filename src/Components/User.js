import { useState } from "react";
const User = (props) => {
  let [age, setAge] = useState(22);
  let [YOP, setYOP] = useState(2022);

  const { name, address, location } = props;
  return (
    <div className="user-function-component">
      <b>Through function component</b>
      <h2>{name}</h2>
      <h3>
        Age :{age} YOP: {YOP}
      </h3>
      <button onClick={() => setAge(++age)}>age++</button>
      <button onClick={() => setAge(--age)}>age--</button>
      <h4>{address}</h4>
      <h4>{location}</h4>
    </div>
  );
};

export default User;
