import './App.css';

const App = () => {

  const profiles = {
    name: 'M Rizal',
  };

  return (
    <div className="App">
      <h1>Hello, {profiles.name}</h1>
    </div>
  );
}

export default App;
