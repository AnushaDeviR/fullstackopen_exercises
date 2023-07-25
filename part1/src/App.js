const Hello = () => {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
const App = () => {
  const now = new Date();
  console.log(now);
  return (
    <div>
      <Hello />
      <p>The time is {now.toString()}</p>
    </div>
  );
};

export default App;
