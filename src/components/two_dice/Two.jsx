import './two.css'

import Dice from 'react-dice-roll';

import DiceImage1 from "../../images/Dice1.png"
import DiceImage2 from "../../images/Dice2.png";
import DiceImage3 from "../../images/Dice3.png";
import DiceImage4 from "../../images/Dice4.png";
import DiceImage5 from "../../images/Dice5.png";
import DiceImage6 from "../../images/Dice6.png";
import DiceImage11 from "../../images/Dice11.png"
import DiceImage21 from "../../images/Dice21.png";
import DiceImage31 from "../../images/Dice31.png";
import DiceImage41 from "../../images/Dice41.png";
import DiceImage51 from "../../images/Dice51.png";
import DiceImage61 from "../../images/Dice61.png";

function Two() {
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]
  var diceImages1 = [
    DiceImage11,
    DiceImage21,
    DiceImage31,
    DiceImage41,
    DiceImage51,
    DiceImage61
  ]

 


 
  return (
<>
<div id="TwoDicegame ">
  <div className="circle xlarge shade1"></div>
        <div className="  mb-3 dark title" >Click on Dice!</div>

        <h4><i className="fa-sharp fa fa-regular fa-heart me-2 mb-5 "></i> Soft</h4>

<div className="d-flex flex-row bd-highlight mb-5 justify-content-evenly">
  <div className="p-2 bd-highlight two_dice">
  <Dice 
    id="dice1"
     size={100} 
     faces={diceImages}
     />
  </div>
  <div className="p-2 bd-highlight"> 
     <Dice 
    id="dice1"
     size={100} 
     faces={diceImages1}
     
     /></div>
</div>
</div>
      
      
</>
  )
}

export default Two