import './App.css';
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";


function App() {
  const handleUpdate = ()=>{
    console.log("clicked");
  }

  return(
    <div>
      <div><Button Text="Button" onSelect = {handleUpdate} /></div>
      <div><NewsCard /></div>
    </div>
  );
}

export default App;
