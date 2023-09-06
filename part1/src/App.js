import { useState } from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};
const App = () => {
  const now = new Date();
  const name = "Jane Doe";
  const age = 10;
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);
  console.log("rendering...", counter);

  return (
    <>
      <Hello name={"John Doe"} />
      <Hello name={name} age={age} />
      <p>The time is {now.toString()}</p>
      <p>
        {friends[0].name}, {friends[0].age}
      </p>
      <p>
        {friends[1].name}, {friends[1].age}
      </p>
      <p>{counter}</p>
    </>
  );
};

export default App;
