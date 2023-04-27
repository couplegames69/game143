import React, { useState } from 'react';
import Dice from 'react-dice-roll';
import oimg1 from '../imagep/o1.png';
import oimg2 from '../imagep/o2.png';
import oimg3 from '../imagep/o3.png';
import oimg4 from '../imagep/o4.png';
import oimg5 from '../imagep/o5.png';
import oimg6 from '../imagep/o6.png';

import one from '../../bgimages/one.png';


import './one.css'



function One() {
  let img = [one,oimg1, oimg2, oimg3, oimg4, oimg5,oimg6];
  let pname = ["Click on Die!","Standing Oral", "Edge of the Bed 69", "Bound Standing Oral", "Upside-Down 69", "The Deep Sea Diver", "Face First"];
  
  const [value1, setValue1] = useState("0");


  return (
<>
  <div id='SingleDiceGame'>
      <h4 className='mb-3' ><i className="fa-sharp fa-solid fa-heart me-2 "></i> Hard</h4>
  <div className="row">
  <div className="col-sm-6">
    <div className="card-block">
      <div className="card-body">
      
      <Dice id="dice1" size={100} onRoll={(value) => setValue1(value)} />
              {console.log(value1)}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
  <div className="card-block">
        <h5 className="card-title"> {pname[value1]}</h5>
      <img src={img[value1]} className="card-img-top mt-2" alt="..."/>
      <div className="card-body">
        {/* <h5 className="card-title">{value1}</h5> */}
       
      </div>
      </div>
  </div>
</div>

   </div>
 </>
  )
}

export default One