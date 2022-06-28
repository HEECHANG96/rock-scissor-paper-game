import { useState } from 'react';
import './App.css';
import Box from './component/Box';

 
function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [gameResult, setGameResult] = useState("");


  const choice = {
    rock:{
      name:"Rock",
      img:"https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
    },
    
    scissor:{
      name:"Scissor",
      img:"https://www.storagemart.com.ph/wp/wp-content/uploads/2020/03/scissor.jpg",
    },

    paper:{
      name:"Paper",
      img:"https://helloaugust.in/wp-content/uploads/2020/04/a4-paper.jpg",
    },
  };

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setGameResult(winner(choice[userChoice], computerChoice));
  };

  const randomChoice=()=>{
    let itemArray =  Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const winner=(user, computer)=>{
    if(user.name === computer.name) {
      return "TIE";
    } else if(user.name === "Rock") 
      return computer.name === "Scissor" ? "WIN":"LOSE";
      else if(user.name === "Scissor")
      return computer.name === "Paper" ? "WIN":"LOSE";
      else if(user.name === "Paper")
      return computer.name === "Rock" ? "WIN":"LOSE";
  };

  return (
    <div>
       <div className="main">
          <Box title="YOU" item={userSelect} result={gameResult}/>
          <Box title="COMPUTER" item={computerSelect} result={gameResult}/>
       </div>

       <div className="main">
          <button onClick={()=>play("scissor")}>가위</button>
          <button onClick={()=>play("rock")}>바위</button>
          <button onClick={()=>play("paper")}>보</button>
       </div>
    </div>
  );
}

export default App;
