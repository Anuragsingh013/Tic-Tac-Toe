import React, { useState ,useRef} from 'react';

import './TicTacToe.css';
import  circle_icon from '../Assets/circle.png'; 
import  cross_icon from '../Assets/cross.png'; 

let data=["","","","","","","","",""];
 const TicTacToe=()=> {

   let [count,setcount]=useState(0);
   let [lock,setlock]=useState(false);

   let titleref=useRef(null);

    const toogle=(e,num)=>{

      if(lock){
        return 0;
      }
      if(count%2===0){
        e.target.innerHTML=`<img src='${cross_icon}'>`;
        data[num]="x";
        setcount(++count);
      }
      else{
         e.target.innerHTML=`<img src='${circle_icon}'>`;
        data[num]="o";
        setcount(++count);
      }
      checkwin();
      
    }

    const checkwin=()=>{
      if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
        won(data[2]);
      }
      else if( data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){

      won(data[5]);
        
      }
      else if( data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
        won(data[8]);
     
        
      }
      else if( data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
        won(data[6]);
     
        
      }
      else if( data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
        won(data[7]);
     
        
      }
      else if( data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
        won(data[8]);
     
        
      }
      else if( data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
        won(data[8]);
     
        
      }
      else if( data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
        won(data[6]);
     
        
      }
      else if( data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
        won(data[2]);
        
    }
    }

   const won=(winner)=>{
     setlock(true);
     if (winner==="x") {
       titleref.current.innerHTML=`congratulation : <img src=${cross_icon}> win`
        
     } else {
       titleref.current.innerHTML=`congratulation : <img src=${circle_icon}> `
        
     }
     
   }

   const Reset=()=>{
     location.reload();
   }
   
  return (
    <>
    <div className="container">

      <h1 className="title" ref={titleref}>Tic Tac Toe in <span>React</span></h1>

      <div className="board">
        <div className="row1">
         <div className="boxes" onClick={(e)=>{toogle(e,0)}}></div>
           <div className="boxes"onClick={(e)=>{toogle(e,1)}}></div>
           <div className="boxes" onClick={(e)=>{toogle(e,2)}}></div>
        </div>
        <div className="row2">
         <div className="boxes" onClick={(e)=>{toogle(e,3)}}></div>
           <div className="boxes" onClick={(e)=>{toogle(e,4)}}></div>
           <div className="boxes" onClick={(e)=>{toogle(e,5)}}></div>
        </div>
        <div className="row3">
         <div className="boxes" onClick={(e)=>{toogle(e,6)}}></div>
           <div className="boxes" onClick={(e)=>{toogle(e,7)}}></div>
           <div className="boxes" onClick={(e)=>{toogle(e,8)}}></div>
        </div>
      </div>
      
      <button className="reset" onClick={Reset}>Reset</button>
    
    
     </div>
    
    
    
    
    
    </>
  );
}
export default TicTacToe;
