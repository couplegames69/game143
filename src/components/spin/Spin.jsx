import React, { useState } from 'react';
import Dice from 'react-dice-roll';

import './spin.css';
import img1 from '../imagep/1.png'
import img2 from '../imagep/2.png'
import img3 from '../imagep/3.png'
import img4 from '../imagep/4.png'
import img5 from '../imagep/5.png'
import img6 from '../imagep/6.png'
import img7 from '../imagep/7.png'
import img8 from '../imagep/8.png'
import img9 from '../imagep/9.png'
import img10 from '../imagep/10.png'
import img11 from '../imagep/11.png'
import img12 from '../imagep/12.png'
import img13 from '../imagep/13.png';
import img14 from '../imagep/14.png';
import img15 from '../imagep/15.png';
import img16 from '../imagep/16.png';
import img17 from '../imagep/17.png';
import img18 from '../imagep/18.png';
import two from '../../bgimages/two.png';
import three from '../../bgimages/three.png';
function Spin() {

    let img = [three,img1, img2, img3, img4, img5, img6 ];

    const img21 = [two, img7, img8, img9, img10, img11, img12];

    const img22 = [two,img13,img14,img15,img16,img17,img18];


    let positionName1=[
      "",
        "Normal Missionary",
        "Reverse Cowgirl",
        "Cowgirl",
        "Face off",
        "The Lazy Dog",
        "Spork",
        "Scoop Me Up",
        "Standing",
        "Nirvana",
        "The Pinball Wizard",
        "Upstanding Citizen",
        "Mermaid",
        "Aquarius",
        "Butterfly",
        "Doggy style",
        "Oath",
        "Golden Arch",
    ]
    let positionName2=[
       "",
       
        "Scoop Me Up",
        "Standing",
        "Nirvana",
        "The Pinball Wizard",
        "Upstanding Citizen",
        "Mermaid",
        "Aquarius",
        "Butterfly",
        "Doggy style",
        "Oath",
        "Golden Arch",
    ]
    let positionName3=[
       "",
       "Aquarius",
       "Butterfly",
       "Doggy style",
       "Oath",
       "Golden Arch",
       "legs over shoulders"
    ]
    const [win, setWin] = useState("0");

    const [win1, setWin1] = useState("0");
    const [win2, setWin2] = useState("0");
    
   


    return (
        <>
  
                 
<div id='positions'>
      <h4><i className="fa-sharp fa-solid fa-fire mb-3"></i> Extreme</h4>
  <div className="row">
  <div className="col-sm-6">
    <div className="card-block">
      <div className="card-body">
      <h4 className='mb-4'>Level 1</h4>
      <Dice id="dice1" size={100} onRoll={(value) => setWin(value)} />

              {/* {console.log(win)} */}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
  <div className="card-block">
        <h5 className="card-title"> {positionName1[win]}</h5>
      <img src={img[win]}   className="card-img-top mt-2" alt="..."/>
      <div className="card-body">
        {/* <h5 className="card-title">{value1}</h5> */}
       
      </div>
      </div>
  </div>
</div>
<hr style={{border: "5px solid black"}}/>

  <div className="row">
  <div className="col-sm-6">
    <div className="card-block">
      <div className="card-body">
      
      <h4 className='mb-4'>Level 2</h4>

      <Dice id="dice2" size={100} onRoll={(value) => setWin1(value)} />
              {console.log(win1)}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
  <div className="card-block">
        <h5 className="card-title"> {positionName2[win1]}</h5>
      <img src=  {img21[win1]} className="card-img-top mt-2" alt="..."/>
      <div className="card-body">
        {/* <h5 className="card-title">{value1}</h5> */}
       
      </div>
      </div>
  </div>
</div>
<hr style={{border: "5px solid black"}}/>

  <div className="row">
  <div className="col-sm-6">
    <div className="">
      <div className="card-body">
      
      <h4 className='mb-4'>Level 3</h4>

      <Dice id="dice2" size={100} onRoll={(value) => setWin2(value)} />
              {console.log(win2)}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
  <div className="">
        <h5 className="card-title"> {positionName3[win2]}</h5>
      <img src=  {img22[win2]} className="card-img-top mt-2" alt="..."/>
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

export default Spin