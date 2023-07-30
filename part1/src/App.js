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
  return (
    <>
      <Hello name={"John Doe"} />
      <Hello name={name} age={age} />
      <p>The time is {now.toString()}</p>
    </>
  );
};

export default App;
