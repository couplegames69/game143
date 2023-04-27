import React from 'react';
import{ useState } from 'react';
import Dice from 'react-dice-roll';

function Task() {

  const [Task1, setValueTask] = useState("Play it turn-by-turn");
  let Taskv = ["",
    "Say something Dirty.",
    "Give a massage to the body part of your partners choice.",
    "Remove an item of clothing from your partner only using your teeth.",
    "Kiss the body part of your partner's choice",
    "Give your partner a sexy dance fo 1 song of their choice.",
    "Put a blindfold and have your partner do whatever they want for 10 mins.",
   
    ];          
  return (
    <>
    <div id="task" className='p-3 mb-3'>
      <h4 className='mb-4'><i className="fa-sharp fa-solid fa-heart me-2"></i> Hot</h4>

    <Dice id="dice1" size={100} onRoll={(value) => setValueTask(value)} />
              {console.log(Task1)}
    </div>
    <h6 className='mb-5'>{Task1}. {Taskv[Task1]}</h6>
    </>
  )
}

export default Task