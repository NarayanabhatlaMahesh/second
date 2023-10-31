import Card from '@mui/material/Card';
import './App.css';

function SomeLines(one){
  return(
    <>
    <input />
    </>
  )
}

function App() {
  const text = "existential crisis is happier now a days";
  return (
    <div className="App">
      <SomeLines one={6} two={2} />
      <Card> {text} </Card>
    </div>
  );
}

export default App;