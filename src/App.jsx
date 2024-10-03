import "./App.css";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import { sum } from "./helper.js";

function App() {
  let winCond = "If sum of digits = 15";
  let winCondition = (ticket) => {
    // return ticket[0]===0;
    return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery
        n={3}
        winninSum={12}
        winCondition={winCondition}
        winCond={winCond}
      />
    </>
  );
}

export default App;
