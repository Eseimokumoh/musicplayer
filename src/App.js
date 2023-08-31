import {useState} from "react";
import './App.css';
import Header from './components/Header';
import SearchInput from './components/searchinputs/';
import Tabs from "./components/Tabs";
import AudioList from './components/AudioList';
import FixFooter from "./components/FixFooter";



function App() {

  const [list, setList]=useState(false);

  const onBackButtonPress=()=>{
    setList(false);
  }
  return (
    <div className="App m-20">
     <Header/>
     <h2 className='mtb-20 app-quote'>Find the best music for your code</h2>
     <SearchInput/>
     <Tabs/>
     {list && <AudioList 
      onBackButtonPress={onBackButtonPress}
     />}
     <button onClick={()=>setList(true)}>All songs</button>
      <FixFooter/>
    </div>
  );
}

export default App;
